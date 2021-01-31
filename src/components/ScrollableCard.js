import React from "react";
import { View, Text, Image } from "react-native";

//CSS
import Styles from "./styles/ScrollableCard";

//data
import { data } from "../services/data";

function ScrollableCard() {
  return (
    <>
      {data.map(({ id,Title, numberOfLoans, price, image, loan }) => {
        return (
          <View key={id} style={Styles.card}>
            <Image source={image} />
            <Text style={Styles.text}>{Title}</Text>
            <View style={Styles.rowView}>
              <Text style={Styles.number}>{numberOfLoans}  </Text>
              <Text style={Styles.text}>{loan}</Text>
            </View>
            <Text style={Styles.numberu}>{price}</Text>
          </View>
        );
      })}
    </>
  );
}

export default ScrollableCard;
