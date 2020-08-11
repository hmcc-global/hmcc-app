import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PersonalIndex from "../screens/PersonalIndex";
import { stackNavigatorHeaderStyle } from "../../styles/global";

const Stack = createStackNavigator();

const PersonalStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorHeaderStyle}>
      <Stack.Screen name="Personal" component={PersonalIndex} />
    </Stack.Navigator>
  );
};

export default PersonalStack;
