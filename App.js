import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import HomeStack from "./src/views/stacks/HomeStack";
import AnnouncementsStack from "./src/views/stacks/AnnouncementsStack";
import SermonsStack from "./src/views/stacks/SermonsStack";
import PersonalStack from "./src/views/stacks/PersonalStack";
import ResourcesStack from "./src/views/stacks/ResourcesStack";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Upcoming":
                iconName = "book-open";
                break;
              case "Sermons":
                iconName = "microphone";
                break;
              case "Personal":
                iconName = "people";
                break;
              case "Resources":
                iconName = "folder-alt";
                break;
            }

            return (
              <Icon
                name={iconName}
                type="simple-line-icon"
                color={color}
                size={size}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Upcoming" component={AnnouncementsStack} />
        <Tab.Screen name="Sermons" component={SermonsStack} />
        <Tab.Screen name="Personal" component={PersonalStack} />
        <Tab.Screen name="Resources" component={ResourcesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
