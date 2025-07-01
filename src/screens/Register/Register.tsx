import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  InputAccessoryView,
  Text,
  View,
  Platform,
  Pressable,
  Keyboard,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useAlert} from '../../hooks/useAlert';
import {useRegister} from '../../hooks/useRegister';
import {RootStackParams} from '../../navigator/StackNavigator';
import SplashScreen from 'react-native-splash-screen';
import {AppContainer, AppButton, AppText} from '../../components';
import {styles} from './Register.styles';

interface Props extends StackScreenProps<RootStackParams, 'Registro'> {}

export const Register = ({route, navigation}: Props) => {
  const {createAlert} = useAlert();
  const [isLoading, setIsLoading] = useState(true);
  const [numberDni, setNumberDni] = React.useState<string>('');
  const {getNames} = useRegister();

  let _call = async () => {
    try {
      const dispositivoId = await AsyncStorage.getItem('UniqueID');
      const dni = await AsyncStorage.getItem('Dni');
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
      if (dispositivoId !== null && dni !== null) {
        // We have data!
        navigation.navigate('Tabs');
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      // Error saving data
      createAlert('Error en AsyncStorage', 'AsyncStorage');
    }
  };

  useEffect(() => {
    _call();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params && !route.params.showLoading) {
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, [navigation]);

  const SubmitDNI = () => {
    Keyboard.dismiss();
    if (numberDni === '' || numberDni.trim().length > 8) {
      createAlert('El DNI debe tener como máximo 8 números', 'DNI');

      return;
    }
    setIsLoading(true);

    getNames(numberDni).then(result => {
      setIsLoading(false);
      if (!result) {
        return;
      }
      if (result.isSuccess) {
        navigation.navigate('ValidarIdentidad', {
          dni: numberDni,
          names: result.data,
        });
      } else {
        createAlert(result.message);
      }
    });
  };

  const inputAccessoryViewID = 'uniqueID';
  return (
    <>
      <AppContainer scroll={true}>
        <View style={styles.container}>
          <AppText
            typeText="subTitle"
            color="main"
            align="center"
            typeWeight="bold">
            MIS CREDENCIALES
          </AppText>

          <AppText typeWeight="bold">Registrate</AppText>

          <AppText color="gray" typeWeight="light">
            Para comenzar a utilizar tu credencial digital por favor indicanos
            tu DNI
          </AppText>

          <AppText marginBottom={50} typeWeight="bold">
            Ingresá tu DNI
          </AppText>

          <TextInput
            style={{...styles.DNItext, ...styles.lineHorizontal}}
            onChangeText={dni => {
              setNumberDni(dni.replace(/[^0-9]/g, ''));
            }}
            value={numberDni}
            keyboardType="numeric"
            keyboardAppearance="dark"
            placeholder="Sólo números sin puntos"
            maxLength={8}
            inputAccessoryViewID={inputAccessoryViewID}
            onSubmitEditing={() => {
              SubmitDNI();
            }}
          />

          <AppButton
            disabled={isLoading}
            isLoading={isLoading}
            onPress={() => SubmitDNI()}
            label={isLoading ? 'Comprobando DNI' : 'Siguiente'}
          />
        </View>
      </AppContainer>
      {Platform.OS === 'ios' ? (
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <View
            style={{
              backgroundColor: 'rgb(106,107,107)',
              paddingVertical: '3%',
            }}>
            <Pressable onPress={() => SubmitDNI()}>
              <Text
                style={{
                  textAlign: 'right',
                  marginHorizontal: 10,
                  color: '#8ab4f8',
                  fontSize: 20,
                }}>
                CONFIRMAR
              </Text>
            </Pressable>
          </View>
        </InputAccessoryView>
      ) : (
        <View />
      )}
    </>
  );
};
