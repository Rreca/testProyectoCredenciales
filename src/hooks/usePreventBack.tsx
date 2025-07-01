import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';
import RNExitApp from 'react-native-exit-app';
const usePreventBack = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
};
// const backAction = () => {
//   Alert.alert('Hold on!', 'Are you sure you want to go back?', [
//     {
//       text: 'Cancel',
//       onPress: () => null,
//       style: 'cancel',
//     },
//     {text: 'YES', onPress: () => BackHandler.exitApp()},
//   ]);
//   return true;
// };
const backAction = () => {
  // BackHandler.exitApp();
  // https://stackoverflow.com/questions/34801664/how-do-i-exit-shut-down-a-react-native-app
  RNExitApp.exitApp();
  return true;
};
export const usePreventBackExit = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
};
export default usePreventBack;
