import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";

export default function HomeScreen() {
  // useEffect(() => {}, [auth]);

  const authFire = auth;

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          console.log("signout");
          signOut(authFire);
        }}
      >
        Sign Out
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
