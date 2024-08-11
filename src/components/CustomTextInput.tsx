import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import colors from "../utils/colors";

interface CustomTextInputProps {
  label: string;
  value: string;
  hasErrors: boolean;
  errorText: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  errorText,
  secureTextEntry = false,
  hasErrors,
}) => {
  return (
    <View>
      <TextInput
        label={label}
        style={styles.input}
        textColor={colors.secondary}
        placeholderTextColor={colors.secondary}
        value={value}
        secureTextEntry={secureTextEntry}
        underlineColor={colors.secondary}
        activeUnderlineColor={colors.secondary}
        onChangeText={onChangeText}
      />
      {hasErrors && <HelperText type="error">{errorText}</HelperText>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    width: wp("80%"),
    paddingHorizontal: wp("3%"),
    backgroundColor: "transparent",
    marginTop: hp("2.5%"),
  },
});
