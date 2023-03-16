import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./img/photo-bg.jpg")}
      >
        <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Логин" />
        <TextInput style={styles.input} placeholder="Адрес электронной почты" />
        <TextInput style={styles.input} placeholder="Пароль" />
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  form: {
    display: "flex",
    gap: 16,
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginHorizontal: 16,
    borderColor: "#F6F6F6",
    backgroundColor: "#E8E8E8",
    color: "#212121",
    borderRadius: 8,
    padding: 16,
    placeholderTextColor: "#BDBDBD",
  },
});
