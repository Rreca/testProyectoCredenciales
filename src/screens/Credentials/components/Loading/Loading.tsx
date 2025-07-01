import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const loading = require("../../../../lottie/validando.json");
import { styles } from "./Loading.styles";

export const Loading = () => {
  const lottieAnimationLoading = (success: boolean) => {
    return <LottieView source={loading} loop={success} autoPlay />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {lottieAnimationLoading(true)}
        <Text style={styles.textLoading}>CARGANDO CREDENCIAL</Text>
      </View>
    </SafeAreaView>
  );
};
