import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useEffect, useState } from "react";
import { Alert, BackHandler } from "react-native";
import credencialesDB from "../../../api/credencialesDB";
import { Credenciales } from "../../../interfaces/responseInterface";

export interface IContracts {
  label: string;
  value: string;
}

interface CredentialsState {
  isLoading: boolean;
  credenciales?: Credenciales;
  contracts: IContracts[];
}

export const useCredentials = () => {
  const [state, setState] = useState<CredentialsState>({
    isLoading: true,
    credenciales: undefined,
    contracts: [],
  });

  const [value, setValue] = React.useState<string>("");
  const getCredenciales = async () => {
    const idDispositivo = await AsyncStorage.getItem("UniqueID");

    const dni = await AsyncStorage.getItem("Dni");

    const credentialsPromise = credencialesDB.get<Credenciales>(
      "/GetList?NumDocumento=" + dni + "&DeviceID=" + idDispositivo
    );

    let CredentialsResp = null;
    try {
      [CredentialsResp] = await Promise.all([credentialsPromise]);

      const arrayContratos: IContracts[] = [];
      console.log("Response IS SUCCESS: " + CredentialsResp.data.isSuccess);

      if (!CredentialsResp.data.isSuccess) {
        setState({
          isLoading: false,
          credenciales: CredentialsResp.data,
          contracts: arrayContratos,
        });
      } else {
        CredentialsResp.data.data.forEach((item) => {
          arrayContratos.push({
            ["label"]: item.numContrato,
            ["value"]: item.numContrato,
          });
        });

        setValue(arrayContratos[0].value);
        setState({
          isLoading: false,
          credenciales: CredentialsResp.data,
          contracts: arrayContratos,
        });
      }
    } catch (error: any) {
      Alert.alert("Aviso", error?.message, [
        { text: "ok", onPress: () => BackHandler.exitApp() },
      ]);
    }
  };
  useEffect(() => {
    getCredenciales();
  }, []);

  return { ...state, value, setValue };
};
