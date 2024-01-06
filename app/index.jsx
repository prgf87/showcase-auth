import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/login";
import { auth } from "../firebaseConfig";
import { Redirect } from "expo-router";
import HomeScreen from "./screens/home";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      const uid = user.uid;
      if (uid) {
        console.log("User has signed in");
        setUser(user);
      }
    } else {
      console.log("User has signed out");
    }
  });

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
