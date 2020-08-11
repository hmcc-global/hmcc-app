import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnnouncementsIndex from "../screens/AnnouncementsIndex";
import { stackNavigatorHeaderStyle } from "../../styles/global";

const Stack = createStackNavigator();

const AnnouncementsStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorHeaderStyle}>
      <Stack.Screen name="Announcements" component={AnnouncementsIndex} />
    </Stack.Navigator>
  );
};

export default AnnouncementsStack;
