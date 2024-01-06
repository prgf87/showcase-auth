import { StyleSheet, View } from "react-native";
import { Button, Modal, Portal, Text } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

const ErrorHandlerModal = ({ error, visible, setVisible }) => {
  const toggleModal = () => {
    setVisible(!error);
  };

  error = { message: "This is an error we didn't think about!" };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          animationType="fade"
          visible={visible}
          onRequestClose={toggleModal}
          style={styles.modalView}
        >
          <Text style={styles.textStyle}>An error has occurred...</Text>
          {error && (
            <Text style={styles.textStyle}>
              {error.message ? error.message : "Sorry, you can't do that..."}
            </Text>
          )}
          <Button
            style={[styles.button, styles.buttonClose]}
            onPress={toggleModal}
          >
            <Text style={styles.buttonTextStyle}>Close</Text>
          </Button>
        </Modal>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: "white",
    borderRadius: 20,
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    padding: 30,
    alignItems: "center",
  },
  button: {
    width: 150,
    alignSelf: "center",
  },
  buttonClose: {
    backgroundColor: "red",
    marginTop: 10,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

export default ErrorHandlerModal;
