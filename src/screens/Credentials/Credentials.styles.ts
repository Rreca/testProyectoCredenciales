import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 600,
  },
  viewMain: {flex: 1, alignItems: 'center'},
  viewHead: {
    position: 'absolute',
    // width: 165,
    height: 19,
    // left: 98,
    top: 70,
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
  flatList: {
    marginTop: 10,
    height: 370,
    top: 170,
    position: 'absolute',
    paddingHorizontal: 0,
  },
});
