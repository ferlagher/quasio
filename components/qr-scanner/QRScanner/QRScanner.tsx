import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TapeItem } from "../../../types/propTypes";
import { setTape } from "../../../store";
import { useDispatch } from "react-redux";

export const QRScanner = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) => {
      setHasPermission(status === "granted");
    });
  }, []);

  const handleBarCodeScanned = ({ data }: BarCodeEvent) => {
    const decompressTape = (data: string) => {
      const parsedData = JSON.parse(data);
      const newTape = [] as TapeItem[];

      Object.entries(parsedData).forEach(([key, value]) => {
        parsedData[key] = (value as string).split(",");
        if (key === "n") {
          parsedData[key] = parsedData[key].map((number: string) =>
            Number(number)
          );
        }
      });

      parsedData.i.forEach((id: string, index: number) => {
        newTape.push({
          id: id,
          number: parsedData.n[index],
          operator: parsedData.o[index],
          note: parsedData.m[index],
        });
      });

      return newTape;
    };

    dispatch(setTape(decompressTape(data)));
    navigation.navigate("Calculator");
  };

  if (hasPermission === false) {
    return <Text>Permission needed</Text>;
  }

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
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
};
