import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnnouncementsIndex from "../screens/AnnouncementsIndex";
import AnnouncementScreen from "../screens/AnnouncementScreen";
import CalendarScreen from "../screens/CalendarScreen";
import { stackNavigatorHeaderStyle } from "../../styles/global";

const Stack = createStackNavigator();

const AnnouncementsStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorHeaderStyle}>
      <Stack.Screen name="Announcements" component={AnnouncementsIndex} />
      <Stack.Screen name="Announcement" component={AnnouncementScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
};

export default AnnouncementsStack;
