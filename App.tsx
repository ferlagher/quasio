import { Navigator } from "./navigation";
import { Provider } from "react-redux";
import { init } from "./db";
import store from "./store";
import { useFonts } from "expo-font";

init()
  .then(() => console.log("Initialized database"))
  .catch(err => {
    console.log("Error initializing db", err);
    alert("Error initializing database");
  });

export default function App() {
  const [fontsLoaded] = useFonts({
    DSEG7: require("./assets/fonts/DSEG7Modern-BoldItalic.ttf"),
    "Courier Prime Regular": require("./assets/fonts/CourierPrime-Regular.ttf"),
    "Courier Prime Italic": require("./assets/fonts/CourierPrime-Italic.ttf"),
    Inter: require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
