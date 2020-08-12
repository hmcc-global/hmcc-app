import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import firestore from "@react-native-firebase/firestore";
import {
  endOfWeek,
  format,
  isWithinInterval,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { partition } from "lodash";

import AnnouncementCard from "../components/AnnouncementCard";
import { fontStyles } from "../../styles/global";

const AnnouncementsIndex = ({ navigation }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          color="transparent"
          name="ios-calendar"
          onPress={() => navigation.navigate("Calendar")}
          reverse
          reverseColor="black"
          type="ionicon"
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("announcements")
      .where("startDate", ">", startOfToday())
      .orderBy("startDate")
      .onSnapshot((snapshot) => {
        const data = [];
        snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
        setAnnouncements(data);
        setIsLoading(false);
      });
    return unsubscribe;
  }, []);

  const [thisWeek, comingUp] = partition(announcements, (announcement) =>
    isWithinInterval(announcement.startDate.toDate(), {
      start: startOfWeek(startOfToday(), { weekStartsOn: 1 }),
      end: endOfWeek(startOfToday(), { weekStartsOn: 1 }),
    })
  );

  const createAnnouncementCard = (announcement) => {
    const {
      cardImageLink,
      description,
      directionsLink,
      endDate,
      hasStartTime,
      id,
      imageHeaderLink,
      location,
      locationLink,
      registerLink,
      startDate,
      tags,
      title,
    } = announcement;

    const start = format(startDate.toDate(), "EE, MMM d");
    const end = endDate ? ` - ${format(endDate.toDate(), "EE, MMM d")}` : "";
    const startTime = hasStartTime
      ? ` | ${format(startDate.toDate(), "h:mm a")}`
      : "";
    const subtitle = [start, end, startTime].join("");

    return (
      <AnnouncementCard
        announcementNavigationHandler={() =>
          navigation.navigate("Announcement", {
            description,
            directionsLink,
            imageHeaderLink,
            location,
            locationLink,
            registerLink,
            subtitle,
            tags,
            title,
          })
        }
        cardImageLink={cardImageLink}
        key={id}
        registerLink={registerLink}
        subtitle={subtitle}
        tags={tags}
        title={title}
      />
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => setRefreshing(false), 2000);
          }}
          refreshing={refreshing}
        />
      }
      style={styles.container}
    >
      <Text style={fontStyles.primaryHeading}>This Week</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : thisWeek.length > 0 ? (
        thisWeek.map(createAnnouncementCard)
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={fontStyles.subtitleText}>
            There are no upcoming events this week
          </Text>
        </View>
      )}
      <Text style={fontStyles.primaryHeading}>Coming Up</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : comingUp.length > 0 ? (
        comingUp.map(createAnnouncementCard)
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={fontStyles.subtitleText}>
            There are no upcoming events
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  emptyContainer: {
    paddingBottom: 30,
  },
});

export default AnnouncementsIndex;
