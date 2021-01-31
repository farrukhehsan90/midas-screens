import { StyleSheet } from "react-native";

//Resources
import Colors from "../../res/Colors";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
  },

  limitView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
  },

  limitChildView: {
    width: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  childView: {
    alignItems: "center",
    marginRight: 20,
  },

  progress: {
    width: 290,
    backgroundColor: Colors.progree_background,
  },

  heading: {
    color: Colors.progress_title,
    fontWeight: "300",
    fontSize: 13,
  },
  text: {
    color: Colors.progress_text,
    fontWeight: "bold",
    fontSize: 15,
  },
});
