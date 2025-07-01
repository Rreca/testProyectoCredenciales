import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';

export const styles = StyleSheet.create({
  Flex: {
    flex: 1,
  },

  viewMain: {alignItems: 'center'},
  viewHead: {
    position: 'absolute',
    height: 25, //19
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
  viewNameMain: {
    flexDirection: 'column',
    marginTop: 188,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    borderColor: AppColors.grayLight,
    borderWidth: 0, //1
    margin: 24,
  },
  viewNameRB: {
    flexDirection: 'row',
    borderWidth: 0,
    borderTopColor: AppColors.grayLight,
    borderBottomWidth: 0,
    borderStartWidth: 0,
    borderEndWidth: 0,
    padding: 10,
    marginHorizontal: 0,
  },
  viewNameText: {paddingTop: 5},
  activityIndicator: {marginTop: 10, top: '45%'},
  backButton: {position: 'absolute', top: 10, left: 5},
});
