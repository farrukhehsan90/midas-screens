import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
    marginTop: 20,
    backgroundColor: "#FFFFFF",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  border: {
    padding: 5,
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#BABABA",
  },

  rowView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
  },
  heading: {
    color: "#B5B5B5",
    fontWeight: "300",
    fontSize: 13,
  },
  emi: {
    color: "#B5B5B5",
    fontWeight: "300",
    fontSize: 13,
    alignSelf: "flex-end",
  },
  title: {
    color: "black",
    fontWeight: "300",
    fontSize: 13,
  },

  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
});
