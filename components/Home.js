import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { white } from "../utils/colors";

const Tab = createBottomTabNavigator();
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
        <View style={{ height: 50 }}>
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

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray"
            }}
          >
            <Tab.Screen
              name="DeckList"
              component={DeckList}
              style={{ fontSize: 20, textAlign: "center" }}
            />
            <Tab.Screen
              name="NewDeck"
              component={NewDeck}
              style={{ fontSize: 20, textAlign: "center" }}
            />
          </Tab.Navigator>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
});

export default Home;
