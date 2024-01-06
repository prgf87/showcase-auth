import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, TextInput } from "react-native-paper";
import { auth } from "../../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ErrorHandlerModal from "../../components/error";
import Loading from "../../components/loading";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    if (uid) console.log("User has signed in");
  } else {
    console.log("User has signed out");
  }
});

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          if (user) {
            console.log(user);
            setLoading(false);
          }
        }
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const register = async () => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = res;
      if (user) setLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  if (error)
    return (
      <View style={styles.modal}>
        <ErrorHandlerModal
          error={error}
          navigation={navigation}
          visible={error}
          setVisible={setError}
        />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Showcase</Text>
        <Text style={styles.heading2}>
          Your one stop shop for all things luxury
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text variant="titleLarge" style={styles.p}>
          Log in or create an account
        </Text>
        <TextInput
          mode="outlined"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputText}
        />
        <TextInput
          mode="outlined"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputText}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <KeyboardAvoidingView behavior="padding">
          <View>
            <TouchableOpacity onPress={signIn} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={register}
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
  },
  modal: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
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
    top: 75,
  },
  heading2: {
    fontSize: 12,
    top: 85,
  },
  p: {
    fontSize: 16,
    paddingBottom: 5,
  },
  input: {
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
    backgroundColor: "#fff",
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
