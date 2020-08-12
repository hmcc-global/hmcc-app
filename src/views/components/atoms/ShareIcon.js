import React from "react";
import { Share } from "react-native";
import { Icon } from "react-native-elements";

const ShareIcon = ({ message }) => {
  return (
    <Icon
      name="share"
      onPress={() => Share.share({ message })}
      type="feather"
    />
  );
};

export default ShareIcon;
