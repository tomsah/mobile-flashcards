import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { purple, white, gray } from "../utils/colors";

export default function MainButton({
  children,
  onPress,
  style = {},
  disabled = false
}) {
  return (
    <TouchableOpacity
      style={[
        Platform.OS === "ios" ? styles.iosGoDeckBtn : styles.AndroidGoDeckBtn,
        disabled ? styles.disabled : styles.enable,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosGoDeckBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 200
  },
  disabled: {
    backgroundColor: "rgba(191, 191, 191, 0.3)"
  },
  enable: {
    opacity: 1
  },
  AndroidGoDeckBtn: {
    backgroundColor: gray,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 20,
    height: 45,
    borderRadius: 2
  },
  btnText: {
    color: white,
    fontSize: 16,
    textAlign: "center"
  }
});
