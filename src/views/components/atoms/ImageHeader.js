import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ImageHeader = ({ children, height, source }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{ height }}>
      <ImageBackground
        onLoad={() => setIsLoading(false)}
        source={source}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "transparent"]}
          locations={[0, isLoading ? 1 : 0.6]}
          style={styles.gradientContainer}
        />
        <View style={styles.childrenContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  childrenContainer: {
    height: "100%",
    position: "absolute",
    width: "100%",
  },
});

export default ImageHeader;
