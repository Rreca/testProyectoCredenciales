import React from 'react';
import {View} from 'react-native';
import {styles} from './ValidateButtons.styles';
import {AppButton} from '../../../../components';

interface IValidateButtons {
  checkedName: string;
  validateIdentity: () => void;
  goBackOnPress: () => void;
  isLoading?: boolean;
}

export const ValidateButtons = ({
  checkedName,
  validateIdentity,
  goBackOnPress,
  isLoading = false,
}: IValidateButtons) => {
  return (
    <View style={styles.contentButton}>
      <AppButton
        disabled={checkedName === ''}
        isLoading={isLoading}
        onPress={() => validateIdentity()}
        label={isLoading ? 'Validando' : 'Validar'}
        marginBottom={20}
      />
      <AppButton
        disabled={checkedName === ''}
        onPress={goBackOnPress}
        label="Atrás"
        marginBottom={20}
        typeButton="secondary"
      />
    </View>
  );
};
