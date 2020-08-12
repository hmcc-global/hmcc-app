import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ImageHeader = ({ uri }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground
        onLoad={() => setIsLoading(false)}
        source={{ uri }}
        style={styles.imageContainer}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "transparent"]}
          locations={[0, isLoading ? 1 : 0.6]}
          style={styles.gradientContainer}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  imageContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
});

export default ImageHeader;
