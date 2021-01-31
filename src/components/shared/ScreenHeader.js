import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//CSS
import styles from "../styles/ScreenHeader";

//Icons
import { Ionicons } from "@expo/vector-icons";

const Header = ({ name, color, size, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons style={styles.icon} name={name} size={size} color={color} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;
