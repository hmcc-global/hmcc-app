import React, { useLayoutEffect } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import Button from "../components/atoms/Button";
import ImageHeader from "../components/atoms/ImageHeader";
import ShareIcon from "../components/atoms/ShareIcon";
import TagList from "../components/atoms/TagList";
import { colors, fontStyles } from "../../styles/global";

const AnnouncementScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: "white",
      headerTransparent: true,
      title: "",
    });
  }, [navigation]);

  const {
    description,
    directionsLink,
    imageHeaderLink,
    location,
    locationLink,
    registerLink,
    subtitle,
    tags,
    title,
  } = route.params;

  const headerText = title
    ? `*${title.toUpperCase()}*\n_When:_ ${subtitle}`
    : "";
  const locationText = locationLink ? `\n_Where:_ ${locationLink}` : "";
  const registerText = registerLink ? `\n_Register:_ ${registerLink}` : "";
  const directionsText = directionsLink
    ? `\n_Directions:_ ${directionsLink}`
    : "";
  const descriptionText = description ? `\n\n${description}` : "";
  const message = [
    headerText,
    locationText,
    registerText,
    directionsText,
    descriptionText,
  ].join("");

  return (
    <View style={styles.container}>
      <ImageHeader uri={imageHeaderLink} />
      <View style={styles.headerContainer}>
        <View style={styles.headerTopContainer}>
          <View style={styles.headerInfoContainer}>
            {tags && (
              <View style={styles.tagContainer}>
                <TagList tags={tags} />
              </View>
            )}
            <Text style={fontStyles.secondaryHeading}>{title}</Text>
            <Text style={fontStyles.subtitleText}>{subtitle}</Text>
            {(location || locationLink) && (
              <View style={styles.locationContainer}>
                <Icon
                  color={locationLink ? colors.link : colors.subtitle}
                  name="location-on"
                  size={18}
                  type="material"
                />
                <Text
                  numberOfLines={1}
                  onPress={() => locationLink && Linking.openURL(locationLink)}
                  style={
                    locationLink ? fontStyles.linkText : fontStyles.subtitleText
                  }
                >
                  {location || locationLink}
                </Text>
              </View>
            )}
          </View>
          <ShareIcon message={message} />
        </View>
        <View style={styles.headerBottomContainer}>
          <View style={styles.bottomContainer}>
            <Button
              disabled={!registerLink}
              onPress={() => {
                registerLink && Linking.openURL(registerLink);
              }}
              title="Register"
            />
          </View>
          <View style={styles.bottomContainer}>
            <Button
              disabled={!directionsLink}
              onPress={() => {
                directionsLink && Linking.openURL(directionsLink);
              }}
              title="Directions"
            />
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "whitesmoke",
    minHeight: 225,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTopContainer: {
    flexDirection: "row",
  },
  headerInfoContainer: {
    flex: 1,
    flexGrow: 1,
    paddingRight: 10,
  },
  tagContainer: {
    paddingBottom: 10,
  },
  locationContainer: {
    flexDirection: "row",
    paddingTop: 5,
  },
  headerBottomContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between",
    paddingTop: 15,
  },
  bottomContainer: {
    flex: 0.45,
  },
  descriptionContainer: {
    padding: 20,
  },
});

export default AnnouncementScreen;
