import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, BackHandler } from "react-native";
import Animated, {
  FadeInUp,
  SharedTransition,
  withSpring,
} from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../utils/colors";
import strings from "../utils/strings";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";
import Loader from "../components/Loader";

const customTransition = SharedTransition.custom((values) => {
  "worklet";
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("tag");
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6; // Minimum 6 characters for the password
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    if (!validatePassword(password)) {
      setIsValidPassword(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const emailHandler = (email: string) => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    setEmail(email);
  };

  const passwordHandler = (password: string) => {
    if (!validatePassword(password)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }
    setPassword(password);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.keyboardAwareContainer}
      keyboardShouldPersistTaps="handled"
    >
      <LinearGradient
        colors={[
          colors.gradientStart,
          colors.background,
          colors.background,
          colors.background,
        ]}
        style={styles.mainContainer}
      >
        <View style={styles.screenContainer}>
          <Loader loading={loading} />
          <View style={styles.logoContainer}>
            <Animated.Image
              source={require("../assets/login_logo.png")}
              style={styles.logo}
              sharedTransitionTag={tag}
              resizeMode="contain"
              sharedTransitionStyle={customTransition}
            />
            <Animated.View
              entering={FadeInUp.duration(500).delay(500)}
              style={styles.textContainer}
            >
              <CustomText style={styles.welcomeText}>
                {strings.welcome}
              </CustomText>
              <CustomText>{strings.loginPrompt}</CustomText>
            </Animated.View>
          </View>
          <View style={styles.inputContainer}>
            <CustomTextInput
              label={strings.emailLabel}
              value={email}
              onChangeText={(email) => emailHandler(email)}
              errorText={strings.emailValidationError}
              hasErrors={!isValidEmail}
            />
            <CustomTextInput
              label={strings.passwordLabel}
              value={password}
              secureTextEntry
              onChangeText={(password) => passwordHandler(password)}
              errorText={strings.passwordValidationError}
              hasErrors={!isValidPassword}
            />
            <View style={styles.forgotPasswordContainer}>
              <CustomText style={styles.forgotPasswordText}>
                {strings.forgotPassword}
              </CustomText>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton title={strings.loginButton} onPress={handleLogin} />
            <CustomText style={{ textAlign: "center" }}>
              {strings.signUpPrompt}{" "}
              <CustomText style={styles.signUpLink}>
                {strings.signUpLink}
              </CustomText>
            </CustomText>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  keyboardAwareContainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  screenContainer: {
    flex: 1,
    width: wp("90%"),
    marginVertical: hp("3%"),
    marginHorizontal: wp("5%"),
    padding: wp("5%"),
  },
  logoContainer: {
    flex: 0.4,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  logo: {
    width: wp("15%"),
    height: hp("10%"),
    marginTop: hp("5%"),
  },
  textContainer: {
    marginTop: hp("2%"),
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: hp("4%"),
    color: colors.text,
  },
  inputContainer: {
    flex: 0.4,
    width: wp("80%"),
    marginTop: hp("3%"),
  },
  forgotPasswordContainer: {
    width: wp("80%"),
    alignItems: "flex-end",
    marginTop: hp("1.5%"),
  },
  forgotPasswordText: {
    color: colors.forgotPasswordText,
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    paddingVertical: hp("5%"),
  },
  loginButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 11,
    marginVertical: hp("2%"),
  },
  signUpLink: {
    color: colors.signUpLink,
    fontWeight: "500",
  },
});
