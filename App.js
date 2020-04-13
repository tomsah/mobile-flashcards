import 'react-native-gesture-handler';
import React from 'react';
import { View, Button } from 'react-native'
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// Components
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

import Quiz from './components/Quiz'
import Deck from './components/Deck'
import NewQuestion from './components/NewQuestion'

// Navigation
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabScreen () {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'NewQuestion') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={DeckList} style={{ fontSize: 20, textAlign: "center" }}/>
        <Tab.Screen name="NewDeck" component={NewDeck} style={{ fontSize: 20, textAlign: "center" }}/>
      </Tab.Navigator>
  )
}

 function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 80}}/>
      <NavigationContainer>
        <Stack.Navigator

        >
          <Stack.Screen
            name="Home"
            component={HomeTabScreen}
          />
          <Stack.Screen
            name="Deck"
            component={Deck}
          />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="NewQuestion" component={NewQuestion} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App
