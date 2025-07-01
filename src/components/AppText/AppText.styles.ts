import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/AppColors";

export const styles = StyleSheet.create({
  font: {
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 18,
  },
  normal: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  bold: {
    fontWeight: "700",
  },
  regular: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "300",
  },
  main: {
    color: AppColors.mainCurrent,
  },
  blue: {
    color: AppColors.main,
  },
  gray: {
    color: AppColors.gray,
  },
});
