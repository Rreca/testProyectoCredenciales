import React, { ReactElement } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

import { styles } from "./ContentNavBottom.styles";

interface IContentNavBottom {
  children: ReactElement;
  isLeft?: boolean;
  isRight?: boolean;
  focused: boolean;
  label: string;
  isFirst?: boolean;
  isLink?: boolean;
  url?: string;
}

export const ContentNavBottom = ({
  children,
  isLeft = false,
  isRight = false,
  isFirst = false,
  focused,
  label,
  isLink = false,
  url,
}: IContentNavBottom) => {
  if (isLink) {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          focused ? styles.containerBackground : {},
          isLeft ? styles.isLeftContent : isRight ? styles.isRightContent : {},
        ]}
        onPress={() => Linking.openURL(url ?? "")}
      >
        <View style={[styles.containerEmpty, isFirst ? styles.isFirst : {}]} />
        {children}
        {focused && <Text style={styles.labelSelected}>{label}</Text>}
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={[
        styles.container,
        focused ? styles.containerBackground : {},
        isLeft ? styles.isLeftContent : isRight ? styles.isRightContent : {},
      ]}
    >
      <View style={[styles.containerEmpty, isFirst ? styles.isFirst : {}]} />
      {children}
      {focused && <Text style={styles.labelSelected}>{label}</Text>}
    </View>
  );
};
