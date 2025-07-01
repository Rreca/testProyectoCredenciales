import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./Card.styles";

interface ICard {
  nombre: string;
  dni: string | null;
  numCliente: string[];
  plan: any;
  numeroCredencial: string;
}

export const Card = ({
  nombre,
  dni,
  numCliente,
  plan,
  numeroCredencial,
}: ICard) => {
  return (
    <View style={styles.viewContainerCard}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.viewCardHead1} />
        <View style={styles.viewCardHead2} />
        <View style={styles.viewCardHead3} />
        <View style={styles.viewCardHead4} />
        <View style={styles.viewCardHead5} />
        <View style={styles.viewCardHead6} />
        <View style={styles.viewCardHead7} />
      </View>
      <View style={styles.viewCard}>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.cardText}>{numeroCredencial}</Text>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={[styles.nameText]}>
            {/* {Dimensions.get('window').width + ' ' +*/ nombre}
          </Text>
        </View>
        {/* <View style={{marginTop: 16}}>
          <Text style={styles.dniText}>DNI:{dni}</Text>
        </View> */}
        <View style={{ marginTop: 16 }}>
          <Text style={styles.dniText}>Cliente:{numCliente}</Text>
        </View>
        <View style={{ marginTop: 16, paddingRight: 24 }}>
          <Text style={[styles.planText]}>{plan.join("/")}</Text>
        </View>
        <View style={{ paddingEnd: 30 }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.emergencias.com.ar/img/new-theme/xlogo_salud.png.pagespeed.ic.MNfALR1x9k.png",
            }}
          />
        </View>
      </View>
    </View>
  );
};
