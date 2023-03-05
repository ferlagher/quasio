import QRCode from "react-native-qrcode-svg";
import React from "react";
import { RootState } from "../../../store";
import { View } from "react-native";
import { useSelector } from "react-redux";

export const QRGenerator = () => {
  const { tape } = useSelector((state: RootState) => state.tape);

  const value = tape.reduce(
    (obj, item) => {
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
    <View
      style={{
        //temporal styles
        flex: 1,
        maxHeight: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#404040",
        paddingTop: 10,
      }}
    >
      <QRCode value={JSON.stringify(value)} />
    </View>
  );
};
