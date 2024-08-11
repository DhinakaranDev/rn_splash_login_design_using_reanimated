import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../utils/colors";
interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.loginButton}
      onPress={onPress}
      underlayColor="#3ea963"
    >
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 11,
    marginVertical: hp("2%"),
  },
  loginButtonText: {
    color: colors.buttonText,
    textAlign: "center",
    paddingVertical: hp("1.3%"),
    fontWeight: "500",
  },
});
export default CustomButton;
