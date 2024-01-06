import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, TextInput } from "react-native-paper";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* <ErrorHandlerModal
        error={error}
        navigation={navigation}
        visible={error}
        setVisible={setError}
      /> */}
      <View style={{ alignItems: "center" }}>
        {/* <View style={styles.row}> */}
        {/* <Image
            source={logo}
            style={{
              resizeMode: "contain",
              height: 120,
              width: 120,
              marginBottom: 20,
              marginLeft: 0,
              position: "absolute",
              right: -38,
            }}
          /> */}
        <Text variant="titleLarge" style={styles.heading}>
          Showcase
        </Text>
        {/* </View> */}
      </View>

      <View style={styles.inputContainer}>
        <Text variant="titleLarge" style={styles.p}>
          Log in or create an account
        </Text>
        <TextInput
          mode="outlined"
          placeholder="Email"
          // value={email}
          // onChangeText={(text) => setEmail(text)}
          style={styles.inputText}
        />
        <TextInput
          mode="outlined"
          placeholder="Password"
          // value={password}
          // onChangeText={(text) => setPassword(text)}
          style={styles.inputText}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <TouchableOpacity
              // onPress={signIn}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={register}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: "85%",
    justifyContent: "center",
    marginTop: 150,
    alignItems: "center",
  },
  heading: {
    fontStyle: "italic",
    fontSize: 50,
  },
  p: {
    fontSize: 16,
    paddingBottom: 5,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 20,
  },
  inputText: {
    width: 300,
    marginTop: 5,
    alignSelf: "center",
  },
  buttonContainer: {
    width: 150,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#0000B1",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 10,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0000B1",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    alignContent: "center",
  },
  buttonOutlineText: {
    color: "#0000B1",
    fontWeight: "700",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",
    marginRight: 90,
  },
});
