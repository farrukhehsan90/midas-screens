import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

//Resources
import images from "../res/Images";
import strings from "../res/Strings";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.childView}>
        <Image source={images.Money} />

        <View>
          <Text style={styles.text}>{strings.NEED_MORE_MONEY}</Text>
          <Text style={styles.heading}>{strings.AVAIL}</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Image style={styles.image} source={images.Avail} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Footer;
