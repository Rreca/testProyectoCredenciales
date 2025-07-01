import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../constants/AppColors';

export const styles = StyleSheet.create({
  viewText: {
    width: '100%',
    height: 19,
    top: 145,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: AppColors.gray,
  },
  viewQuestion: {
    width: 265,
    height: 25, //19
    top: 176,
  },
  questionText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: AppColors.main,
  },
});
