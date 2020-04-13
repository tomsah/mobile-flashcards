import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { purple, white } from '../utils/colors'
import MainButton from './MainButton'
import { saveDeckTitle } from '../utils/api'

class NewDeck extends Component {
  state = {
    title : ''
  }

  setText = (text) => this.setState({
    title: text
  })

  submitNewDeck = () => {
    //add new deck to data
    const { title } = this.state
    saveDeckTitle(title)
      .then(() => {
        //redirect
        console.log('redirect to the deck view')
    })
  }

  render() {
    const { title } = this.state
    return (
      <View style={styles.container}>
        <Text  style={{ fontSize: 18, textAlign: "center", padding: 20 }}>What is the Title of your new Deck ?</Text>
        <Text>{JSON.stringify(title)}</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your deck title here"
          onChangeText={text => this.setText(text)}
          defaultValue={title}
        />

        <MainButton  onPress={this.submitNewDeck}>
          Submit
        </MainButton>
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: purple,
    marginTop: 30,
    marginBottom: 30
  }
})

export default NewDeck
