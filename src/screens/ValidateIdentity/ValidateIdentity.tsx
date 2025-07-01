import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';
import {Button} from 'react-native-paper';
import {useAlert} from '../../hooks/useAlert';
import {postParams, useValidateIdentity} from './hooks/useValidateIdentity';
import {Response} from '../../interfaces/responseInterface';
import {RootStackParams} from '../../navigator/StackNavigator';
import {RadioButtonCustom, SubTitle, ValidateButtons} from './components';
import {styles} from './ValidateIdentity.styles';

interface Props extends StackScreenProps<RootStackParams, 'ValidarIdentidad'> {}

export const ValidateIdentity = ({route, navigation}: Props) => {
  const [checkedName, setCheckedName] = useState(''); //initial choice
  const {createAlert} = useAlert();
  const stackNavigator = useNavigation<NavigationProp<RootStackParams>>();

  const goBackOnPress = () => {
    stackNavigator.goBack();
  };

  const {dni, names} = route.params;
  const namesValues = new Array();

  names.map(function (elem) {
    let data = {label: elem, value: elem};
    namesValues.push(data);
  });

  let {isLoading, setRegisterDevice} = useValidateIdentity();

  const validateIdentity = async () => {
    try {
      //obtener el id de dispositivo
      let idDispositivo = await DeviceInfo.getUniqueId();
      // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
      // Android: "67c3cdd4c5a1025c"
      // Windows: "{2cf7cb3c-da7a-d508-0d7f-696bb51185b4}"

      const obj: postParams = {
        NumDocumento: dni,
        DeviceID: idDispositivo,
        NomPersona: checkedName,
      };
      // Funcion delay no se utiliza
      // function delay(ms: number) {
      //   return new Promise(resolve => setTimeout(resolve, ms));
      // }
      setRegisterDevice(obj)
        .then((result: Response) => {
          if (result.isSuccess) {
            //Persistir en el storage
            AsyncStorage.setItem('UniqueID', idDispositivo);
            AsyncStorage.setItem('Dni', dni.toString());

            navigation.push('Tabs');
          } else {
            createAlert(result.message);
            navigation.navigate('Registro', {
              showLoading: false,
            });
          }
        })
        .catch(error => {
          createAlert(error, 'setRegisterDevice');
        });
      //
    } catch (error: any) {
      // Error saving data
      createAlert(error, 'Validar Identidad');
    }
  };

  return (
    <>
      <SafeAreaView style={styles.Flex}>
        <ScrollView style={styles.Flex}>
          <View style={styles.viewMain}>
            <View style={styles.viewHead}>
              <Text style={styles.head}>MIS CREDENCIALES</Text>
            </View>
            {!isLoading ? <></> : <SubTitle />}
          </View>
          <View style={styles.viewNameMain}>
            <RadioForm
              buttonColor={'#0556A5'}
              animation={true}
              // radio_props={namesValues}
              onPress={value => {
                setCheckedName(value);
              }} //if the user changes options, set the new value
            />

            {namesValues.map((obj, i) => (
              <RadioButtonCustom
                key={i}
                i={i}
                checkedName={checkedName}
                setCheckedName={setCheckedName}
                obj={obj}
              />
            ))}
          </View>

          <ValidateButtons
            checkedName={checkedName}
            validateIdentity={validateIdentity}
            goBackOnPress={goBackOnPress}
            isLoading={isLoading}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
