import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import MainButton from "./MainButton";
import { white } from "../../mobile-flashcards/utils/colors";
import { getDeck } from "../utils/api";


class Deck extends Component {
  state = {
    deck: {}
  };

  componentDidMount() {
    const { deckId } = this.props.route.params;
    this.props.navigation.addListener("focus", () => {
       getDeck(deckId).then(deck => {
        return this.setState(() => ({ deck: deck }));
      });
    });
  }

  startQuiz = deckId => {
    const { navigation } = this.props;
    return navigation.navigate("Quiz", { deckId: deckId });
  };

  addQuestion = () => {
    const { navigation } = this.props;
    const { deckId } = this.props.route.params;
    return navigation.navigate("NewQuestion", { deckId: deckId });
  };

  render() {
    const { deck } = this.state;
    const title = Object.keys(deck);
    const questions = deck[title];
    const cardNumber = title && questions && Object.keys(questions).length;

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={{ fontSize: 20, textAlign: "center" }}>{title}</Text>
          <Text style={{ fontSize: 18, textAlign: "center", padding: 20 }}>
            {cardNumber} cards
          </Text>
          <MainButton
            disabled={ cardNumber === 0}
            onPress={() => this.startQuiz(title)}>Start</MainButton>
          <MainButton onPress={this.addQuestion}>Add Question</MainButton>
        </View>
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
  item: {
    textAlign: "center",
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
});

export default Deck;
