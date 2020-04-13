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
    const { title } = this.state
    const { navigation } = this.props
    saveDeckTitle(title)
      .then(() => {
        navigation.jumpTo('Home')
        return  navigation.navigate('Deck', {deckId: title})
    })
  }

  render() {
    const { title } = this.state
    return (
      <View style={styles.container}>
        <Text  style={{ fontSize: 18, textAlign: "center", padding: 20 }}>What is the Title of your new Deck ?</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your deck title here"
          onChangeText={text => this.setText(text)}
          defaultValue={title}
        />

        <MainButton
          disabled={[...title].length === 0}
          onPress={this.submitNewDeck}>
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
    height: 50,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: purple,
    marginTop: 30,
    marginBottom: 30,
    padding: 25,
    paddingTop: 5,
    paddingBottom: 5,
  }
})

export default NewDeck
