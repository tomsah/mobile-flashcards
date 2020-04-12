import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import Quiz from './components/Quiz'
import Deck from './components/Deck'


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{height: 80}}/>
      <Quiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
