import React from 'react';
import {
  Dimensions,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AppColors} from '../constants/AppColors';
import {stylesMain} from '../theme/appTheme';

const telefonos = [
  {
    titulo: 'ASISTENCIA MÉDICA',
    tipo: 'tel:',
    icono: 'laptop-medical',
    color: '#7C9FF7',
    label: 'SOLICITÁ UN TURNO',
    numero: '08008883637',
    fuente: 'FontAwesome5',
  },
  {
    titulo: '',
    tipo: 'whatsapp://send?text=Hola! Quiero solicitar un médico a domicilio. &phone=+',
    icono: 'logo-whatsapp',
    color: '#25D366',
    label: 'SOLICITÁ MEDICO A\n DOMICILIO',
    numero: '541135618286',
    fuente: 'Ionicons',
  },
  {
    titulo: '',
    icono: 'call',
    tipo: 'tel:',
    color: 'red',
    label: 'RIESGO DE VIDA',
    numero: '08104440911',
    fuente: 'Ionicons',
  },
  {
    titulo: 'TELÉFONOS ÚTILES',
    tipo: 'tel:',
    icono: 'call',
    color: '#7C9FF7',
    label: 'ATENCIÓN AL SOCIO',
    numero: '08008883637',
    fuente: 'Ionicons',
  },
  {
    titulo: '',
    tipo: 'whatsapp://send?text=Hola! Quiero realizar una gestión. &phone=+',
    icono: 'logo-whatsapp',
    color: '#25D366',
    label: 'ESCRIBINOS POR\n WHATSAPP',
    numero: '541169103637',
    fuente: 'Ionicons',
  },
];

const TelefonosUtiles = () => {
  const mainObject = [...telefonos];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={stylesMain.viewMain}>
          <View style={stylesMain.viewHead}>
            {mainObject.map((obj, i) => {
              const IconComponent =
                obj.fuente === 'FontAwesome5' ? FontAwesome5 : Ionicons;

              return (
                <View key={i} style={{marginBottom: 20}}>
                  {obj.titulo ? (
                    <Text style={{...styles.ButtonTitle}}>{obj.titulo}</Text>
                  ) : null}
                  <View style={styles.viewButton}>
                    <View style={styles.buttonWrapper}>
                      <IconComponent.Button
                        style={styles.button}
                        borderRadius={30}
                        name={obj.icono}
                        size={35}
                        backgroundColor={obj.color}
                        onPress={() => {
                          Linking.openURL(obj.tipo + obj.numero);
                        }}>
                        {obj.label}
                      </IconComponent.Button>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ButtonTitle: {
    fontFamily: 'Gotham',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: AppColors.mainCurrent,
    paddingTop: 30,
    paddingBottom: 30,
    textTransform: 'uppercase',
  },
  viewButton: {
    alignItems: 'center',
  },
  buttonWrapper: {
    width: screenWidth * 0.85, // 85% del ancho de pantalla
  },
  button: {
    justifyContent: 'center',
  },
});

export default TelefonosUtiles;
