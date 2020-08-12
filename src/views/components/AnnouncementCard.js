import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

import Button from "./atoms/Button";
import TagList from "./atoms/TagList";
import { fontStyles } from "../../styles/global";

const AnnouncementCard = ({
  announcementNavigationHandler,
  cardImageLink,
  registerLink,
  subtitle,
  tags,
  title,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TouchableOpacity
      onPress={announcementNavigationHandler}
      style={styles.container}
    >
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator />
            </View>
          )}
          <Image
            onLoad={() => setIsLoading(false)}
            source={{ uri: cardImageLink }}
            style={styles.cardImage}
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <TagList tags={tags} />
        <Text numberOfLines={2} style={fontStyles.secondaryHeading}>
          {title}
        </Text>
        <Text style={fontStyles.subtitleText}>{subtitle}</Text>
        <View style={styles.bottomContentContainer}>
          <Icon color="black" name="arrow-right" type="feather" />
          {registerLink && (
            <Button
              onPress={() => {
                Linking.openURL(registerLink);
              }}
              title="Register"
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 190,
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  leftContainer: {
    flex: 0.35,
  },
  imageContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  loadingContainer: {
    position: "absolute",
  },
  cardImage: {
    aspectRatio: 4 / 5,
    flex: 1,
  },
  rightContainer: {
    flex: 0.6,
  },
  bottomContentContainer: {
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    flexGrow: 1,
    justifyContent: "space-between",
  },
});

export default AnnouncementCard;
