import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Credentials } from "../screens/Credentials";
// import Registro from "../screens/Registro";
import { Register } from "../screens/Register";

import { ValidateIdentity } from "../screens/ValidateIdentity";
import { Tabs } from "./Tabs";

interface registro {
  showLoading: boolean;
}
interface validarIdent {
  dni: string;
  names: string[];
}
export type RootStackParams = {
  Registro: registro;
  ValidarIdentidad: validarIdent;
  Credenciales: undefined;
  Tabs: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { elevation: 0, shadowColor: "transparent" },
        cardStyle: {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Registro" component={Register} />
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="ValidarIdentidad"
        component={ValidateIdentity}
      />
      <Stack.Screen name="Credenciales" component={Credentials} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
