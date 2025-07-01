import {SafeAreaView, View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './AppContainer.styles';

interface IAppContainer {
  children: JSX.Element | JSX.Element[];
  scroll?: boolean;
}

export const AppContainer = ({children, scroll = false}: IAppContainer) => {
  return (
    <SafeAreaView style={styles.container}>
      {scroll ? (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
          contentContainerStyle={{flexGrow: 1}}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </SafeAreaView>
  );
};
