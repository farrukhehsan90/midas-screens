import * as React from "react";
import { View, ScrollView } from "react-native";

//CSS
import Styles from "./Styles";

// Components
import Header from "../../components/shared/ScreenHeader";
import Amount from "../../components/Amount";
import StatusBar from "../../components/StatusBar";
import Progress from "../../components/Progress";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

export const PersonalLoan = ({ text }) => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Header
          title={"Personal Loan"}
          name="arrow-back"
          size={20}
          color="white"
        />

        <StatusBar />

        <Amount />

        <Progress progress={0.4} color={"#8F8F8F"} />

        <Card />
        <Card />

        <Footer />
      </View>
    </ScrollView>
  );
};

export default PersonalLoan;
