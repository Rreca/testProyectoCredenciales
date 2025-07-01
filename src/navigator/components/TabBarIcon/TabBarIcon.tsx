import {View, Text} from 'react-native';
import React from 'react';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {AppColors} from '../../../constants/AppColors';
import {ContentNavBottom} from '../ContentNavBottom/ContentNavBottom';

interface ITabBarIcon {
  focused: boolean;
  route: any;
}

export const TabBarIcon = ({focused, route}: ITabBarIcon) => {
  const colorSelected = focused ? AppColors.white : AppColors.main;
  switch (route.name) {
    case 'Credenciales':
      return (
        <ContentNavBottom
          isLeft={true}
          focused={focused}
          label={route.name}
          isFirst={true}>
          <IconFontAwesome5
            name="address-card"
            size={35}
            color={colorSelected}
          />
        </ContentNavBottom>
      );
    case 'TelefonosUtiles':
      return (
        <ContentNavBottom focused={focused} label="Teléfonos">
          <IconMaterialCommunityIcons
            name="phone-message-outline"
            size={35}
            color={colorSelected}
          />
        </ContentNavBottom>
      );
    case 'LinksEmergencias':
      return (
        <ContentNavBottom isRight={true} focused={focused} label="Más">
          <IconFontAwesome5
            name="hand-holding-medical"
            size={35}
            color={colorSelected}
          />
        </ContentNavBottom>
      );
    case 'Uma':
      return (
        <ContentNavBottom
          focused={focused}
          label={route.name}
          isLink={true}
          url="http://app.uma-health.com/login/">
          <IconFontAwesome
            name="video-camera"
            size={35}
            color={colorSelected}
          />
        </ContentNavBottom>
      );
  }
};
