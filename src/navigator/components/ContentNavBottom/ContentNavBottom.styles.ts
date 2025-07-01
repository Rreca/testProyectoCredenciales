import { StyleSheet } from "react-native";
import { AppColors } from "../../../constants/AppColors";

export const styles = StyleSheet.create({
  container: {
    // padding: 5,
    height: 62,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    margin: 0,
    padding: 0,
  },
  containerBackground: {
    backgroundColor: AppColors.main,
    width: "105%",
  },
  contentEmpty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerEmpty: {
    width: 1,
    backgroundColor: AppColors.main,
    height: 25,
    position: "absolute",
    left: 0,
  },
  isFirst: {
    width: 0,
  },
  isLeftContent: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  isRightContent: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  labelSelected: {
    color: AppColors.white,
    fontSize: 10,
  },
});
