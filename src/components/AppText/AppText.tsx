import { Text } from "react-native";
import React from "react";
import { styles } from "./AppText.styles";

interface IAppText {
  children: JSX.Element | string;
  typeText?: "title" | "subTitle" | "normal" | "small";
  align?: "center" | "right" | "left";
  typeWeight?: "bold" | "regular" | "light";
  color?: "main" | "blue" | "gray";
  marginTop?: number;
  marginBottom?: number;
}

export const AppText = ({
  children,
  align = "center",
  typeText = "normal",
  typeWeight = "regular",
  color = "blue",
  marginTop,
  marginBottom,
}: IAppText) => {
  return (
    <Text
      style={[
        styles.title,
        styles.main,
        styles[`${typeWeight}`],
        styles[`${typeText}`],
        styles[`${color}`],
        {
          textAlign: align,
          marginTop,
          marginBottom,
        },
      ]}
    >
      {children}
    </Text>
  );
};
