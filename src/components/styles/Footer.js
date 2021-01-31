import {StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  childView: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  heading: {
    color: "#B5B5B5",
    fontWeight: "300",
    fontSize: 13,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
    alignSelf: "center",
  },
})