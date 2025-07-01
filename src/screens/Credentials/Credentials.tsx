import React, { useState, useRef } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";
import { usePreventBackExit } from "../../hooks/usePreventBack";
import { Beneficiario } from "../../interfaces/responseInterface";
import { RootStackParams } from "../../navigator/StackNavigator";
import { Card, Loading, Contracts } from "./components";
import { useCredentials } from "./hooks/useCredentials";
import { styles } from "./Credentials.styles";

interface Props extends StackScreenProps<RootStackParams, "Credenciales"> {}

export const Credentials = ({ navigation }: Props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  usePreventBackExit();

  const OFFSET = Math.round(Dimensions.get("window").width * 0.07); //40

  const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2.8;
  const ITEM_HEIGHT = 350;

  const [ref, setRef] = useState(null);

  const [dropdownItem, setDropdownItem] = useState("");
  const { isLoading, credenciales, contracts, value, setValue } =
    useCredentials();

  const deleteStorage = (error: string) => {
    Alert.alert("Aviso", error, [
      {
        text: "ok",
        onPress: async () => {
          const _v = await AsyncStorage.removeItem("UniqueID");
          const _c = await AsyncStorage.removeItem("Dni");
          navigation.push("Registro", {
            showLoading: false,
          });
        },
      },
    ]);
  };

  const setItems = (value: any) => {
    console.log("setItems :" + value);
    if (ref) {
      ref?.scrollTo({
        x: 0,
        y: 0,
        animated: true,
      });
    }
    setDropdownItem(value);
  };

  const flatCredenciales = () => {
    if (!credenciales?.isSuccess) {
      deleteStorage(credenciales?.message!);
      return [];
    } else {
      const credencialesxContrato = credenciales?.data.filter(
        (credencial) => credencial.numContrato === value
      );

      return credencialesxContrato[0].beneficiarios;
    }
  };

  const renderItem = (item: Beneficiario) => (
    <Card
      nombre={item.nombreBeneficiario}
      dni={item.numDocumento}
      plan={item.productos}
      numCliente={item.numCliente}
      numeroCredencial={item.numBeneficiario}
    />
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.viewMain}>
          <View style={styles.viewHead}>
            <Text style={styles.head}>MIS CREDENCIALES</Text>
          </View>
          {contracts?.length > 1 && (
            <Contracts
              setValue={setValue}
              value={value}
              setItems={(value) => setItems(value)}
              contracts={contracts}
            />
          )}

          <ScrollView
            nestedScrollEnabled={true}
            // snapToStart={true}
            ref={(ref) => {
              setRef(ref);
            }}
            horizontal={true}
            decelerationRate={"normal"}
            snapToInterval={ITEM_WIDTH}
            snapToAlignment={"start"}
            bounces={false}
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            disableIntervalMomentum
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={12}
          >
            {flatCredenciales().map((item, idx) => {
              const inputRange = [
                (idx - 1) * ITEM_WIDTH,
                idx * ITEM_WIDTH,
                (idx + 1) * ITEM_WIDTH,
              ];

              const translate = scrollX.interpolate({
                inputRange,
                outputRange: [0.9, 1, 0.9],
              });

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.9, 1, 0.9],
              });

              return (
                <Animated.View
                  key={item.nombreBeneficiario}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    marginLeft: idx === 0 ? OFFSET : undefined,
                    marginRight:
                      idx === flatCredenciales().length - 1
                        ? OFFSET * 2
                        : undefined,

                    opacity: opacity,
                    transform: [{ scale: translate }],
                  }}
                >
                  <View
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                    }}
                  >
                    {item !== undefined && renderItem(item)}
                  </View>
                </Animated.View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
