import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { NavigationProp, useFocusEffect } from "@react-navigation/native";
import Animated, {
  BounceInDown,
  BounceInUp,
  PinwheelIn,
} from "react-native-reanimated";
import colors from "../utils/colors";

type Props = {
  navigation: NavigationProp<any, any>;
};

const Splash = (props: Props) => {
  const [initalAnim, setInitialAnim] = useState(true);
  useFocusEffect(() => {
    setTimeout(() => setInitialAnim(false), 1000);
    setTimeout(() => props.navigation.navigate("Login"), 3000);
  });

  return initalAnim ? (
    <>
      <Animated.View
        entering={BounceInDown}
        exiting={BounceInUp}
        style={styles.topContainer}
      ></Animated.View>
      <Animated.View
        entering={BounceInUp}
        exiting={BounceInDown}
        style={styles.bottomContainer}
      />
    </>
  ) : (
    <View style={styles.mainContainer}>
      <Animated.Image
        entering={PinwheelIn.duration(500).delay(500)}
        source={require("../assets/splash_logo.png")}
        style={{ width: 150, height: 150 }}
        sharedTransitionTag="tag"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  topContainer: {
    flex: 0.5,
    backgroundColor: colors.primary,
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor: colors.primary,
  },
});
