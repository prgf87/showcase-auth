import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/login";
import { auth } from "../firebaseConfig";
import { Redirect } from "expo-router";
import HomeScreen from "./screens/home";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = { user };
        if (uid) {
          console.log("User has signed in");
          setUser(user);
        }
      } else {
        console.log("User has signed out");
      }
    });
  }, [user]);

  return (
    <>
      {user ? (
        <View style={styles.container}>
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      ) : (
        <View style={styles.container}>
          <LoginScreen />
          <StatusBar style="auto" />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
