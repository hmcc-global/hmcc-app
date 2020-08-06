import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AnnouncementsIndex from "../screens/AnnouncementsIndex";

const Stack = createStackNavigator();

const AnnouncementsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Announcements" component={AnnouncementsIndex} />
    </Stack.Navigator>
  );
};

export default AnnouncementsStack;
