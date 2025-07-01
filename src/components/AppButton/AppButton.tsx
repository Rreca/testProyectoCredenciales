import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
// import { Button } from "react-native-paper";
import {styles} from './AppButton.styles';
import {AppColors} from '../../constants/AppColors';

interface IAppButton {
  isLoading?: boolean;
  disabled?: boolean;
  onPress: () => void;
  label: string;
  marginTop?: number;
  marginBottom?: number;
  typeButton?: 'main' | 'secondary';
}

export const AppButton = ({
  disabled = false,
  onPress,
  label,
  isLoading = false,
  marginTop = 0,
  marginBottom = 0,
  typeButton = 'main',
}: IAppButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // loading={isLoading}
      disabled={disabled}
      style={[
        styles.button,
        typeButton === 'main'
          ? styles.main
          : typeButton === 'secondary'
          ? styles.secondary
          : {},
        disabled ? styles.viewButtonDisabled : {},
        {
          marginTop,
          marginBottom,
        },
      ]}>
      {isLoading && (
        <ActivityIndicator
          style={styles.activityStyle}
          color={AppColors.white}
        />
      )}
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
};
