import { StyleSheet } from "react-native";

export const colors = {
  blank: "white",
  link: "#445AA2",
  subtitle: "#8C8C8C",
};

export const stackNavigatorHeaderStyle = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.blank,
  },
  headerTitleStyle: {
    textTransform: "uppercase",
  },
});

export const fontStyles = StyleSheet.create({
  linkText: {
    color: colors.link,
    fontSize: 15,
  },
  primaryHeading: {
    fontFamily: "NotoSerif-Bold",
    fontSize: 22,
    paddingVertical: 15,
  },
  secondaryHeading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  subtitleText: {
    color: colors.subtitle,
    fontSize: 15,
  },
});
