import { StyleSheet, View } from "react-native";
import { Button, Modal, Portal, Text, useTheme } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

const ErrorHandlerModal = ({ error, navigation, visible, setVisible }) => {
  const toggleModal = () => {
    setVisible(!error);
  };

  const theme = useTheme();

  error = { message: "This is an error we didn't think about!" };

  return (
    <PaperProvider>
      <Portal
        theme={{
          colors: {
            backdrop: "transparent",
          },
        }}
      >
        <Modal
          theme={{
            colors: {
              backdrop: "transparent",
            },
          }}
          style={styles.centeredView}
          animationType="fade"
          //You can change the animation type if needed
          // transparent={true}
          //Set to true for a transparent background
          visible={visible}
          onRequestClose={toggleModal}
          // style={styles.modalView}
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
// <Portal>
//   <Modal
//     animationType="slide" // You can change the animation type if needed
//     transparent={true} // Set to true for a transparent background
//     visible={visible}
//     onRequestClose={toggleModal}
//   >
//     <View style={styles.centeredView}>
//       <View style={styles.modalView}>
//         <Text style={styles.titleTextStyle}>
//           An error has occurred, please try again
//         </Text>
//         {error && <Text style={styles.textStyle}>{error.message}</Text>}
//         <Button
//           style={[styles.button, styles.buttonClose]}
//           onPress={toggleModal}
//         >
//           <Text style={styles.buttonTextStyle}>Close</Text>
//         </Button>
//       </View>
//     </View>
//   </Modal>
// </Portal>
//   );
// };

const styles = StyleSheet.create({
  centeredView: {
    // justifyContent: "space-around",
    // alignSelf: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "white",
    // borderBlockColor: "black",
    // borderWidth: 2,
    borderRadius: 20,
    // padding: 30,
  },
  // input: {
  //   width: "100%",
  //   height: 42,
  //   marginVertical: 10,
  // },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    padding: 0,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    width: 150,

    alignSelf: "center",
  },
  buttonClose: {
    backgroundColor: "red",
    // paddingVertical: 8,
    // paddingHorizontal: 16,
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
  // titleTextStyle: {
  //   color: "black",
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   fontSize: 18,
  //   marginBottom: 20,
  // },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
});

export default ErrorHandlerModal;
