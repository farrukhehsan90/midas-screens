import React from "react";
import { View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";

//CSS
import styles from "./styles/Progress";

//Resources
import strings from "../res/Strings";


const Progress = ({ progress, color }) => {
  return (
    <>
      <View style={styles.container}>
        <ProgressBar
          style={styles.progress}
          progress={progress}
          color={color}
        />
      </View>
      <View style={styles.limitView}>
        <View style={styles.limitChildView}>
          <Text style={styles.heading}>{strings.PL1}</Text>
          <Text style={styles.heading}>{strings.PL2}</Text>
        </View>
        <View style={styles.childView}>
          <Text style={styles.heading}>{strings.LOAN_LIMIT}</Text>
          <Text style={styles.text}>{strings.LIMIT}</Text>
        </View>
      </View>
    </>
  );
};

export default Progress;
