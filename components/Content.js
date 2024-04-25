import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Content = () => {
  return (
    <View style={styles.content}>
      <Text style={[styles.outputText, styles.textTypo1]}>6,291÷5</Text>
      <Text style={[styles.inputText, styles.row1SpaceBlock]}>1,258.2</Text>
      <View style={[styles.row1, styles.row1SpaceBlock]}>
        <View style={[styles.clearallBtn, styles.btnLayout1]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>C</Text>
        </View>
        <View style={[styles.fractionBtn, styles.btnLayout1]}>
          <Image
            style={styles.iconPosition}
            contentFit="cover"
            source={require("../assets/-icon1.png")}
          />
          <Text style={[styles.text1, styles.textLayout]}>±</Text>
        </View>
        <View style={[styles.fractionBtn, styles.btnLayout1]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon2.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>%</Text>
        </View>
        <View style={[styles.divideBtn, styles.btnLayout1]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon3.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>÷</Text>
        </View>
      </View>
      <View style={[styles.row1, styles.row1SpaceBlock]}>
        <View style={styles.btnLayout}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>7</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon4.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>8</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon2.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>9</Text>
        </View>
        <View style={[styles.divideBtn, styles.btnLayout1]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon3.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>×</Text>
        </View>
      </View>
      <View style={[styles.row1, styles.row1SpaceBlock]}>
        <View style={styles.btnLayout}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>4</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon4.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>5</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon2.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>6</Text>
        </View>
        <View style={[styles.divideBtn, styles.btnLayout1]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon3.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>–</Text>
        </View>
      </View>
      <View style={[styles.row1, styles.row1SpaceBlock]}>
        <View style={styles.btnLayout}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>1</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon4.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>2</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon2.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>3</Text>
        </View>
        <View style={[styles.divideBtn, styles.btnLayout1]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon3.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>+</Text>
        </View>
      </View>
      <View style={[styles.row1, styles.row1SpaceBlock]}>
        <View style={styles.btnLayout}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>.</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon4.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>0</Text>
        </View>
        <View style={[styles.btn1, styles.btnLayout]}>
          <Image
            style={styles.iconPosition}
            contentFit="cover"
            source={require("../assets/-icon2.png")}
          />
          <Text style={[styles.text18, styles.textLayout]}>⌫</Text>
        </View>
        <View style={[styles.divideBtn, styles.btnLayout1]}>
          <Image
            style={[styles.icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/-icon3.png")}
          />
          <Text style={[styles.text, styles.textLayout]}>=</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo1: {
    textAlign: "right",
    color: Color.generalWhite,
    fontFamily: FontFamily.workSansLight,
    fontWeight: "300",
  },
  row1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  btnLayout1: {
    overflow: "hidden",
    height: 72,
    borderRadius: Border.br_5xl,
    flex: 1,
  },
  iconPosition: {
    height: 32,
    width: 32,
    left: "50%",
    top: "50%",
    marginLeft: -15.9,
    marginTop: -16,
    position: "absolute",
  },
  textLayout: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
    lineHeight: 40,
    left: 12,
    top: 12,
    color: Color.generalWhite,
    position: "absolute",
  },
  btnLayout: {
    backgroundColor: Color.darkButtonLowEmphasis,
    overflow: "hidden",
    height: 72,
    borderRadius: Border.br_5xl,
    flex: 1,
  },
  outputText: {
    fontSize: FontSize.size_21xl,
    opacity: 0.4,
    alignSelf: "stretch",
    color: Color.generalWhite,
    fontFamily: FontFamily.workSansLight,
    fontWeight: "300",
  },
  inputText: {
    fontSize: FontSize.size_77xl,
    lineHeight: 96,
    textAlign: "right",
    color: Color.generalWhite,
    fontFamily: FontFamily.workSansLight,
    fontWeight: "300",
  },
  icon: {
    display: "none",
  },
  text: {
    display: "flex",
    fontSize: FontSize.size_13xl,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
    lineHeight: 40,
    left: 12,
    top: 12,
  },
  clearallBtn: {
    backgroundColor: Color.darkButtonMediumEmphasis,
    height: 72,
    borderRadius: Border.br_5xl,
    flex: 1,
  },
  text1: {
    fontSize: FontSize.size_13xl,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
    lineHeight: 40,
    left: 12,
    top: 12,
    display: "none",
  },
  fractionBtn: {
    marginLeft: 16,
    backgroundColor: Color.darkButtonMediumEmphasis,
    height: 72,
    borderRadius: Border.br_5xl,
    flex: 1,
  },
  divideBtn: {
    backgroundColor: Color.darkButtonHighEmphasis,
    marginLeft: 16,
    height: 72,
    borderRadius: Border.br_5xl,
    flex: 1,
  },
  row1: {
    flexDirection: "row",
  },
  btn1: {
    marginLeft: 16,
  },
  text18: {
    fontSize: FontSize.size_5xl,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.workSansRegular,
    lineHeight: 40,
    left: 12,
    top: 12,
    display: "none",
  },
  content: {
    right: 20,
    bottom: 66,
    left: 20,
    position: "absolute",
  },
});

export default Content;
