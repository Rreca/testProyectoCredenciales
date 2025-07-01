import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './LinkEmergency.styles';
import {stylesMain} from '../../theme/appTheme';

const links = [
  {
    link: 'https://www.clubemergencias.com.ar',
    imagen: require('../../../assets/images/clubEmergencias.png'),
  },
  {
    link: 'https://www.emergencias.com.ar/cartilla',
    imagen: require('../../../assets/images/cartilla.png'),
  },
];

export const LinksEmergency = () => {
  let mainObject = JSON.parse(JSON.stringify(links));
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: 900,
        }}
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        <View style={stylesMain.viewMain}>
          <View style={stylesMain.viewHead}>
            <Text style={stylesMain.head}>LINKS ÚTILES</Text>
            <View style={styles.buttonMain}>
              {mainObject.map(
                (
                  obj: {link: string; imagen: ImageSourcePropType},
                  i: number,
                ) => (
                  <View style={styles.buttonView} key={i}>
                    <TouchableOpacity
                      style={styles.buttonOpacity}
                      onPress={() => Linking.openURL(obj.link)}>
                      <Image source={obj.imagen} />
                    </TouchableOpacity>
                  </View>
                ),
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
