import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import PersonalIndex from "../screens/PersonalIndex";

const Stack = createStackNavigator();

const PersonalStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Personal" component={PersonalIndex} />
    </Stack.Navigator>
  );
};

export default PersonalStack;
