import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { IContracts } from "../../hooks/useCredentials";
import { styles } from "./Contracts.styles";

interface IContractsComponent {
  setItems: (value: any) => void;
  setValue: (value: any) => void;
  value: string;
  contracts: IContracts[];
}

export const Contracts = ({
  setItems,
  value,
  contracts,
  setValue,
}: IContractsComponent) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ position: "absolute", zIndex: 99 }}>
      <View style={styles.viewContract}>
        <Text style={styles.contract}>Contratos</Text>
      </View>
      <DropDownPicker
        listMode="SCROLLVIEW"
        style={styles.dropDownList}
        open={open}
        value={value}
        items={contracts}
        setOpen={setOpen}
        setValue={setValue}
        setItems={(value) => setItems(value)}
        onChangeValue={(value) => {
          setItems(value);
        }}
        dropDownContainerStyle={styles.dropDownContainer}
        dropDownDirection="BOTTOM"
        placeholder="Seleccione un contrato"
      />
    </View>
  );
};
