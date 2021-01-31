import { StyleSheet } from "react-native";
import Colors from "../../res/Colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 30,
  },
  heading: {
    color: Colors.amount_title,
    fontWeight: "300",
    fontSize: 13,
  },
  text: {
    color: Colors.amount_text,
    fontWeight: "bold",
    fontSize: 15,
  },
});
