import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SermonsIndex from "../screens/SermonsIndex";
import { stackNavigatorHeaderStyle } from "../../styles/global";

const Stack = createStackNavigator();

const SermonsStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorHeaderStyle}>
      <Stack.Screen name="Sermons" component={SermonsIndex} />
    </Stack.Navigator>
  );
};

export default SermonsStack;
