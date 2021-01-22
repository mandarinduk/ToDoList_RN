import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ToDoList from "./screens/ToDoList";
import DoneList from "./screens/DoneList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "지키리🙏🏻",
          headerStyle: {
            backgroundColor: "#C29AE5",
            height: 100,
            shadowColor: "transparent",
          },
          headerTintColor: "#FFFEF8",
          headerTitleStyle: {
            fontWeight: "900",
            fontSize: 23,
          },
          headerLeft: null,
        }}
      >
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="DoneList" component={DoneList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
