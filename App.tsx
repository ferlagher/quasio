import { Button, Image, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, Coder!</Text>
      <Button
        title="Sorpresa 🐈"
        color={"#b60c18"}
        onPress={() => setIsShow(wasShow => !wasShow)}
      />
      <Image
        source={{ uri: "http://placekitten.com/200/300" }}
        style={[styles.image, isShow ? styles.show : styles.hide]}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232325",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginVertical: 20,
  },
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
});
