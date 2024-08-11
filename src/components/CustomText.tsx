import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../utils/colors";
interface CustomTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({ children, style }) => {
  return <Text style={[styles.smallText, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  smallText: {
    fontWeight: "400",
    fontSize: hp("1.6%"),
    marginTop: hp("1.8%"),
    color: colors.text,
  },
});
