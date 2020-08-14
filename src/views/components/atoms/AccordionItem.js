import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

import { fontStyles } from "../../../styles/global";

const AccordionItem = ({ children, expanded, leftIcon, title }) => {
  const [bodyContainerHeight, setBodyContainerHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(expanded);
  const animatedController = useRef(new Animated.Value(expanded ? 1 : 0))
    .current;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          Animated.timing(animatedController, {
            duration: 300,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            toValue: isExpanded ? 0 : 1,
            useNativeDriver: false,
          }).start();
          setIsExpanded(!isExpanded);
        }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.leftContainer}>
            {leftIcon && <Icon style={styles.iconContainer} {...leftIcon} />}
            <Text style={fontStyles.tertiaryHeading}>{title}</Text>
          </View>
          <Animated.View
            style={{
              transform: [
                {
                  rotateZ: animatedController.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0rad", `${Math.PI}rad`],
                  }),
                },
              ],
            }}
          >
            <Icon name="keyboard-arrow-down" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={{
          ...styles.bodyContainer,
          height: animatedController.interpolate({
            inputRange: [0, 1],
            outputRange: [0, bodyContainerHeight],
          }),
        }}
      >
        <View
          style={styles.contentContainer}
          onLayout={(event) =>
            setBodyContainerHeight(event.nativeEvent.layout.height)
          }
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    paddingRight: 15,
  },
  bodyContainer: {
    overflow: "hidden",
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
  },
});

export default AccordionItem;
