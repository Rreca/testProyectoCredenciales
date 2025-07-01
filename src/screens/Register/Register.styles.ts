import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/AppColors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flex: 1,
    paddingHorizontal: 10,
  },
  DNItext: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '300',
    lineHeight: 28,
    textAlign: 'center',
    color: AppColors.gray,
    marginBottom: 100,
  },
  lineHorizontal: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    height: 60,
    borderBottomColor: AppColors.main,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
