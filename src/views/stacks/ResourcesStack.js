import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ResourcesIndex from "../screens/ResourcesIndex";

const Stack = createStackNavigator();

const ResourcesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Resources" component={ResourcesIndex} />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
