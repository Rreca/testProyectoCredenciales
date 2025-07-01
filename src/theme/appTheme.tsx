import {StyleSheet} from 'react-native';
import {AppColors} from '../constants/AppColors';

export const colores = {
  primary: '#5856D6',
  secondary: 'green',
  warning: 'yellow',
  error: 'red',
};

export const stylesMain = StyleSheet.create({
  activityIndicator: {
    marginTop: 10,
    top: '45%',
  },
  viewMain: {
    flex: 1,
    alignItems: 'center',
  },
  viewHead: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  head: {
    fontFamily: 'Gotham',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: AppColors.mainCurrent,
  },
});
