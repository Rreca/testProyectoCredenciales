import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../constants/AppColors';

export const styles = StyleSheet.create({
  viewButton: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  contentButton: {
    paddingHorizontal: 15,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: AppColors.mainCurrent,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
