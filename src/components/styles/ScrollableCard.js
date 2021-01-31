import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
  card: {
    flex: 1,
    width: 130,
    flexDirection: "column",
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  rowView: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontWeight: "600",
    color: Colors.text,
  },
  number: {
    fontWeight: "bold",
  },
});
