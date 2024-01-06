import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/login";
import { auth } from "../firebaseConfig";
import { Redirect } from "expo-router";
import HomeScreen from "./screens/home";

export default function App() {
  const { user } = auth;

  if (!user) {
    return (
      <View style={styles.container}>
        <LoginScreen />
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return <HomeScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
