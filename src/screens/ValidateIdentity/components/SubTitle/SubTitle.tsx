import { View, Text } from "react-native";
import React from "react";
import { styles } from "./SubTitle.styles";

export const SubTitle = () => {
  return (
    <>
      <View style={styles.viewText}>
        <Text style={styles.text}>Ahora vamos a validar tu identidad</Text>
      </View>

      <View style={styles.viewQuestion}>
        <Text style={styles.questionText}>¿Cómo te llamás?</Text>
      </View>
    </>
  );
};
