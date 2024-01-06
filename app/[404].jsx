import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ErrorPage404() {
  return (
    <View style={styles.container}>
      <Text>404 Page</Text>
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
