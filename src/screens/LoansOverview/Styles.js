import { StyleSheet } from "react-native";
import Colors from "../../res/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: Colors.background_secondary,
  },
  text: {
    fontSize: 15,
    color: Colors.text,
  },
  userName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
  },
  columnView: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  rowView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 20,
  },
  rowLimitView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  limitAmount: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subText: {
    fontWeight: "600",
    fontSize: 17,
    color: Colors.text,
    textDecorationLine: "underline",
  },
  childContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    borderTopRightRadius: 65,
  },
  title: {
    padding: 20,
    fontSize: 17,
    color: "#FFFFFF",
    marginLeft: 10,
  },
});
