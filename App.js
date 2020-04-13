import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native'

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
import Home from './components/Home'



// Navigation
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



 function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 80}}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DeckList} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="NewQuestion" component={NewQuestion} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App
