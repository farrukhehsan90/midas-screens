import React from "react";
import { View, Text } from "react-native";

//CSS
import styles from "./styles/Amount";

//Resources
import strings from "../res/Strings";

const Amount = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>{strings.AVAILED_LOAN}</Text>
        <Text style={styles.text}>{strings.AVAILABLE_LOAN_PRICE}</Text>
      </View>

      <View>
        <Text style={styles.heading}>{strings.AVAILABLE}</Text>
        <Text style={styles.text}>{strings.AVAILABLE_PRICE}</Text>
      </View>
    </View>
  );
};

export default Amount;
