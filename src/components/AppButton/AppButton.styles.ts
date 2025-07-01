import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';

export const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  main: {
    backgroundColor: AppColors.mainCurrent,
  },
  secondary: {
    backgroundColor: AppColors.skyBlue,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityStyle: {
    marginRight: 5,
  },
  viewButtonDisabled: {opacity: 0.5},
});
