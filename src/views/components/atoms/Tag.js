import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tag = ({ title }) => {
  const colors = [
    "hsla(2,100%,81%,0.5)",
    "hsla(5,88%,67%,0.5)",
    "hsla(35,84%,59%,0.5)",
    "hsla(47,38%,64%,0.5)",
    "hsla(50,64%,56%,0.5)",
    "hsla(127,34%,59%,0.5)",
    "hsla(187,49%,64%,0.5)",
    "hsla(188,29%,53%,0.5)",
    "hsla(226,43%,67%,0.5)",
    "hsla(240,2%,55%,0.5)",
  ];
  const hashValue = Array.from(title).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  const backgroundColor = colors[hashValue % 10];

  return (
    <View style={{ ...styles.container, backgroundColor }}>
      <Text style={styles.tagText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginRight: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  tagText: {
    color: "black",
    fontSize: 11,
  },
});

export default Tag;
