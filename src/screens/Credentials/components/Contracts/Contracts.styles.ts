import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../constants/AppColors';

export const styles = StyleSheet.create({
  viewContract: {
    position: 'absolute',
    width: 165,
    height: 25, //
    // left: 98,
    top: 100,
  },
  contract: {
    fontFamily: 'Gotham',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: 0,
    color: AppColors.main,
  },
  dropDownList: {
    top: 130,
    position: 'relative',
    width: '50%',
    borderColor: AppColors.grayLight,
  },
  dropDownContainer: {
    top: 180,
    width: '50%',
    borderColor: AppColors.grayLight,
  },
});
