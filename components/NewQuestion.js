import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { gray, white } from "../utils/colors";
import MainButton from "./MainButton";
import { addCardToDeck } from "../utils/api";

class NewQuestion extends Component {
  state = {
    question: "",
    answer: ""
  };

  setQuestion = text =>
    this.setState(state => ({
      ...state,
      question: text
    }));

  setAnswer = text =>
    this.setState(state => ({
      ...state,
      answer: text
    }));

  submitNewQuestion = async () => {
    const { question, answer } = this.state;
    const { navigation, route } = this.props;
    const { deckId } = route.params;

    const card = {
      question,
      answer
    };
    await addCardToDeck(deckId, card).then(() => {
      return navigation.navigate("Deck", { deckId });
    });
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, textAlign: "center", padding: 20 }}>
          Enter your question
        </Text>
        <TextInput
          style={styles.input}
          placeholder="enter your Question here"
          onChangeText={text => this.setQuestion(text)}
          defaultValue={question}
        />
        <Text style={{ fontSize: 18, textAlign: "center", padding: 20 }}>
          Enter your Answer
        </Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          placeholder="enter your Answer here"
          onChangeText={text => this.setAnswer(text)}
          defaultValue={answer}
        />

        <MainButton
          disabled={[...question].length === 0 && [...answer].length === 0}
          onPress={this.submitNewQuestion}
        >
          Submit
        </MainButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: gray
  }
});

export default NewQuestion;
