import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

//CSS
import styles from "../styles/Button";

const Button = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
