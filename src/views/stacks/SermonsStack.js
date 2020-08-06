import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SermonsIndex from "../screens/SermonsIndex";

const Stack = createStackNavigator();

const SermonsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sermons" component={SermonsIndex} />
    </Stack.Navigator>
  );
};

export default SermonsStack;
