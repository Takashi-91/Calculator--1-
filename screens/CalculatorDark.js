import * as React from "react";
import { StyleSheet, View } from "react-native";
import Content from "../components/Content";
import { Color } from "../GlobalStyles";

const CalculatorDark = () => {
  return (
    <View style={styles.calculatorDark}>
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorDark: {
    backgroundColor: Color.darkBackground,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default CalculatorDark;
