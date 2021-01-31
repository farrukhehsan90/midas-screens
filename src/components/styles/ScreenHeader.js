import { StyleSheet } from "react-native";
import Colors from "../../res/Colors";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  icon: {
    marginLeft: 20,
    width: 30,
  },
  headerTitle: {
    color: Colors.header_title,
    fontWeight: "bold",
    fontSize: 17,
  },
});
