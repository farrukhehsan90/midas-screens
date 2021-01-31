import { StyleSheet } from "react-native";
import Colors from "../../res/Colors";

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    width: 100,
    justifyContent: "center",
    backgroundColor: Colors.button_background,
  },
  name: {
    color: Colors.button_name,
    fontWeight: "bold",
    textAlign: "center",
  },
});
