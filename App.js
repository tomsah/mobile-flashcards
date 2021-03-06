import "react-native-gesture-handler";
import React, { Component } from "react";
import { View } from "react-native";

import { setLocalNotification } from "./utils/notifications";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";

import Quiz from "./components/Quiz";
import Deck from "./components/Deck";
import NewQuestion from "./components/NewQuestion";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "NewQuestion") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen
        name="Home"
        component={DeckList}
        style={{ fontSize: 20, textAlign: "center" }}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeck}
        style={{ fontSize: 20, textAlign: "center" }}
      />
    </Tab.Navigator>
  );
}

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTabScreen} />
            <Stack.Screen name="Deck" component={Deck} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="NewQuestion" component={NewQuestion} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default App;
