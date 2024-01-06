import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/login";
import { auth } from "../firebaseConfig";
import HomeScreen from "./screens/home";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "./context/UserContext";

export default function App() {
  const [user, setUser] = useState({ name: "", email: "", uid: "" });

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <UserContext.Provider value={user}>
      <View style={styles.container}>
        {user ? (
          <>
            <HomeScreen />
            <StatusBar style="auto" />
          </>
        ) : (
          <>
            <LoginScreen />
            <StatusBar style="auto" />
          </>
        )}
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
