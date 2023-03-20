import { Text, View } from "react-native";

import { BackButton } from "../../shared";
import QRCode from "react-native-qrcode-svg";
import React from "react";
import { RootState } from "../../../store";
import { TapeItem } from "../../../types/propTypes";
import { styles } from "./styles";
import { useSelector } from "react-redux";

type QRValue = {
  i: string;
  n: string;
  o: string;
  m: string;
};

export const QRGenerator = () => {
  const { tape } = useSelector((state: RootState) => state.tape);

  const value = tape.reduce(
    (obj: QRValue, item: TapeItem) => {
      if (!obj.i) {
        obj.i = item.id;
        obj.n = item.number.toString();
        obj.o = item.operator;
        obj.m = item.note || "";
      } else {
        obj.i += "," + item.id;
        obj.n += "," + item.number;
        obj.o += "," + item.operator;
        obj.m += "," + (item.note || "");
      }

      return obj;
    },
    { i: "", n: "", o: "", m: "" }
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your QR code:</Text>
      <QRCode size={200} quietZone={5} value={JSON.stringify(value)} />
      <BackButton />
    </View>
  );
};
