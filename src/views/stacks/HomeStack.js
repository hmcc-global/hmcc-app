import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeIndex from "../screens/HomeIndex";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeIndex} />
    </Stack.Navigator>
  );
};

export default HomeStack;
