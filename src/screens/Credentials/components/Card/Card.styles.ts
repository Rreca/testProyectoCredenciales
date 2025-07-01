import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  viewContainerCard: {
    height: 346,
    width: width - Math.round(width * 0.07) * 3.4, //286 //2.8

    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 10,
    paddingBottom: 5,
    elevation: 4,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  viewCardHead1: {
    marginTop: 3,
    width:
      (Dimensions.get("window").width -
        Math.round(Dimensions.get("window").width * 0.07) * 3.4) /
      7, //44 //40.85
    height: 16,
    backgroundColor: "#EE396D",
    borderTopLeftRadius: 10,
  },
  viewCardHead2: {
    marginTop: 3,
    width:
      (Dimensions.get("window").width -
        Math.round(Dimensions.get("window").width * 0.07) * 3.4) /
      7, //44 //40.85
    height: 16,
    backgroundColor: "#63469C",
    zIndex: 999,
  },
  viewCardHead3: {
    marginTop: 3,
    width:
      (Dimensions.get("window").width -
        Math.round(Dimensions.get("window").width * 0.07) * 3.4) /
      7, //44,
    height: 16,
    backgroundColor: "#EF3E3A",

    zIndex: 999,
  },
  viewCardHead4: {
    marginTop: 3,
    width:
      (Dimensions.get("window").width -
        Math.round(Dimensions.get("window").width * 0.07) * 3.4) /
      7, //44,
    height: 16,
    backgroundColor: "#2F5F53",
    zIndex: 999,
  },
  viewCardHead5: {
    marginTop: 3,
    width:
      (Dimensions.get("window").width -
        Math.round(Dimensions.get("window").width * 0.07) * 3.4) /
      7, //44,
    height: 16,
    backgroundColor: "#F7EC2F",
    zIndex: 999,
  },
  viewCardHead6: {
    marginTop: 3,
    width:
      (Dimensions.get("window").width -
        Math.round(Dimensions.get("window").width * 0.07) * 3.4) /
      7, //44,
    height: 16,
    backgroundColor: "#67C4AA",
    zIndex: 999,
  },
  viewCardHead7: {
    marginTop: 3,
    width:
      (Dimensions.get("window").width -
        Math.round(Dimensions.get("window").width * 0.07) * 3.4) /
      7, //44,
    height: 16,
    backgroundColor: "#5AC7D8",
    borderTopRightRadius: 10,
    zIndex: 999,
  },
  viewCard: {
    backgroundColor: "white",
    height: 324,
    width:
      Dimensions.get("window").width -
      Math.round(Dimensions.get("window").width * 0.07) * 3.4,
    borderBottomStartRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardText: {
    width: 279, //279
    height: 28, //28
    marginLeft: 24,
    color: "#0657A5",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 24,
    lineHeight: 28,
    display: "flex",
    alignItems: "center",
    letterSpacing: 1,
  },
  nameText: {
    height: 56,
    marginLeft: 24,
    color: "#0657A5",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 23,
    display: "flex",
    alignItems: "center",
  },
  dniText: {
    height: 28, //28
    marginLeft: 24,
    color: "#0657A5",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 33,
    display: "flex",
    alignItems: "center",
  },
  planText: {
    height: 60,
    marginLeft: 24,
    color: "#0657A5",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    borderTopWidth: 1,
    paddingTop: 16,
    borderTopColor: "rgba(158, 150, 150, .5)",
  },
  image: {
    height: 46,
    width: 120,
    alignSelf: "flex-end",
  },
});
