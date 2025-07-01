import React from 'react';
import {Alert} from 'react-native';

export const useAlert = () => {
  const createAlert = (text: string, title: string = 'Aviso') =>
    Alert.alert(title, text);
  return {createAlert};
};
