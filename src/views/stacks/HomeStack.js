import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeIndex from "../screens/HomeIndex";
import { stackNavigatorHeaderStyle } from "../../styles/global";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorHeaderStyle}>
      <Stack.Screen name="Home" component={HomeIndex} />
    </Stack.Navigator>
  );
};

export default HomeStack;
