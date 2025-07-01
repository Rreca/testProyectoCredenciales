import {StyleSheet} from 'react-native';
import {AppColors} from '../constants/AppColors';

export const styles = StyleSheet.create({
  tabBarStyle: {
    width: '90%',
    marginLeft: 15,
    borderTopColor: AppColors.blueViolet,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    bottom: 25,
  },
  tabBarLabelStyle: {fontSize: 15},
  tabBarIconStyle: {
    alignSelf: 'center',
  },
});
