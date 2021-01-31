import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Header from "../../components/shared/Header";
import strings from "../../res/Strings";

//CSS
import Styles from "./Styles";

//Components
import Card from "../../components/ScrollableCard";

const LoansOverview = () => {
  return (
    // <ScrollView >
    <View style={Styles.container}>
      <Header title={"Loans Overview"} />

      <View style={Styles.columnView}>
        <View style={Styles.rowView}>
          <Text style={Styles.text}>{strings.HEY} </Text>
          <Text style={Styles.userName}>{strings.USER}</Text>
        </View>

        <View style={Styles.rowView}>
          <Text style={Styles.description}>{strings.ACTIVE} </Text>
        </View>

        <View style={Styles.rowView}>
          <Text style={Styles.price}>{strings.ACTIVE_LOAN}</Text>
        </View>

        <View style={Styles.rowLimitView}>
          <Text style={Styles.description}>{strings.LIMIT_AVAILABLE} </Text>
          <Text style={Styles.limitAmount}>{strings.LIMIT_TOTAL}.</Text>
        </View>
      </View>

      <View style={Styles.rowView}>
        <TouchableOpacity>
          <Text style={Styles.subText}>
            {strings.AVAIL_NOW} {">>"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.childContainer}>
        <Text style={Styles.title}>{strings.ACTIVE_LOANS}</Text>

        <ScrollView horizontal>
          <Card />
        </ScrollView>
      </View>
    </View>

    // </ScrollView>
  );
};

export default LoansOverview;
