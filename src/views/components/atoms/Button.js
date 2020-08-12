import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({
  backgroundColor = "black",
  border,
  color = "white",
  disabled,
  onPress,
  title,
}) => {
  const hasBorder = border && !disabled;
  const textColor = disabled ? "rgba(0,0,0,0.2)" : color;
  const containerStyles = {
    backgroundColor: disabled ? "rgba(0,0,0,0.06)" : backgroundColor,
    borderColor: textColor,
    borderWidth: hasBorder ? 1 : 0,
    paddingHorizontal: hasBorder ? 24 : 25,
    paddingVertical: hasBorder ? 7 : 8,
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{ ...styles.container, ...containerStyles }}
    >
      <Text style={{ ...styles.titleText, color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 3,
  },
  titleText: {
    fontSize: 13,
  },
});

export default Button;
