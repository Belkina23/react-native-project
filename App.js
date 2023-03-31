import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

SplashScreen.preventAutoHideAsync();


function App() {
  const routing = useRoute({});

  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./Screens/img/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./Screens/img/Roboto-Regular.ttf"),
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        <NavigationContainer>{routing}</NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
  },
});

export default App;
