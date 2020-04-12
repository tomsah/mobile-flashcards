import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import Quiz from './components/Quiz'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 80}}/>
      <DeckList />
    </View>
  );
}
