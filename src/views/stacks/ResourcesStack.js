import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ResourcesIndex from "../screens/ResourcesIndex";
import { stackNavigatorHeaderStyle } from "../../styles/global";

const Stack = createStackNavigator();

const ResourcesStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorHeaderStyle}>
      <Stack.Screen name="Resources" component={ResourcesIndex} />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
