import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

//CSS
import styles from "./styles/Card"

//components
import Button from "./shared/Button";

//resources
import Strings from "../res/Strings";
import Images from "../res/Images";


const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{Strings.PERSONAL_LOAN}</Text>
          <Text style={styles.text}>{Strings.LOAN_Price}</Text>
        </View>
        <View>
          <Text style={styles.emi}>{Strings.EMI}</Text>
          <Text style={styles.text}>{Strings.EMI_Price}</Text>
        </View>
      </View>
      <View style={styles.border}>
        <View>
          <Text style={styles.title}>{Strings.EMI_DUES}</Text>
          <Text style={styles.heading}>{Strings.DUE_DAYS}</Text>
        </View>
        <Button name={"Pay Now"} />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{Strings.PERSENT}</Text>
          <Text style={styles.heading}>{Strings.INTREST_RATE}</Text>
        </View>

        <View>
          <Text style={styles.text}>{Strings.YEARS}</Text>
          <Text style={styles.heading}>{Strings.TENURE}</Text>
        </View>
      </View>

      <View>
        <View style={styles.rowView}>
          <Text style={styles.heading}>{Strings.DISBURSAL}</Text>
          <Text style={styles.text}>{Strings.DATE}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.heading}>{Strings.POS}</Text>
          <Text style={styles.text}>₹ {Strings.POS_PRICE}</Text>
        </View>
      </View>

      <View style={styles.rowView}>
        <TouchableOpacity>
          <Image source={Images.Service} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={Images.Statment} />
        </TouchableOpacity>
      </View>

      <View style={{ alignSelf: "center", marginBottom: 10 }}>
        <TouchableOpacity>
          <Image source={Images.Payment} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
