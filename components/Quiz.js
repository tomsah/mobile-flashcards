import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
} from "react-native";
import { getDeck } from "../utils/api";
import { white } from "../utils/colors";
import MainButton from "./MainButton";

class Quiz extends Component {
  state = {
    deck: {},
    currentQuestion: 0,
    quizEnd: false,
    score: 0,
    showAnswer: false
  };

  componentDidMount() {
    const { deckId } = this.props.route.params;
    // need to get deck Id or pass the deck as prop
    getDeck(deckId).then(deck => {
      return this.setState(() => ({ deck: deck }));
    });
  }

  showAnswer = () =>
    this.setState(state => ({
      ...state,
      showAnswer: true
    }));

  answer = (answer, questionId) => {
    const { deck, currentQuestion } = this.state;
    const title = Object.keys(deck);
    const questions = deck[title];
    const cardNumber = title && questions && Object.keys(questions).length;

    if (answer === questions[questionId]) {
      this.setState(state => ({
        ...state,
        score: state.score + 1,
        currentQuestion: currentQuestion + 1,
        quizEnd: currentQuestion + 1 === cardNumber
      }));
    }

    this.setState(state => ({
      ...state,
      currentQuestion: currentQuestion + 1,
      quizEnd: currentQuestion + 1 === cardNumber
    }));
  };

  nextQuestion = cardNumber => {
    this.setState(state => ({
      ...state,
      currentQuestion: state.currentQuestion + 1,
      showAnswer: false,
      quizEnd: state.currentQuestion + 1 === cardNumber
    }));
  };

  restartQuiz = () => {
    this.setState(state => ({
      ...state,
      currentQuestion: 0,
      quizEnd: false,
      score: 0,
      showAnswer: false
    }));
  };

  backToDeck = (deckId) => {
    const { navigation } = this.props
    return navigation.navigate('Deck', {deckId})
  };

  render() {
    const { deck, currentQuestion, quizEnd, score, showAnswer } = this.state;
    const title = Object.keys(deck);
    const questions = deck[title];
    const cardNumber = title && questions && Object.keys(questions).length;

    if (quizEnd) {
      return (
        <View style={styles.item}>
          <Text style={{ fontSize: 18, textAlign: "center", padding: 20 }}>
            you have answered correctly {"\n"} {score} out of {cardNumber}{" "}
          </Text>
          <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 40 }}>
            {" "}
            you have a final score of {score}
          </Text>

          <MainButton onPress={this.restartQuiz}>Restart</MainButton>

          <MainButton onPress={() => this.backToDeck(title)}>Back to deck</MainButton>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {questions &&
          Object.keys(questions).map((question, index) => {
            if (currentQuestion === index) {
              return (
                <View style={styles.item} key={index}>
                  <Text
                    style={{ fontSize: 18, textAlign: "center", padding: 20 }}
                  >
                    This Question {currentQuestion} of {cardNumber}
                  </Text>
                  {showAnswer ? (
                    <View>
                      <Text>{questions[question]}</Text>
                      <Button
                        title="next question"
                        onPress={() => this.nextQuestion(currentQuestion)}
                      />
                    </View>
                  ) : (
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          padding: 20,
                          textAlign: "center"
                        }}
                      >
                        {question}?
                      </Text>

                      <Button title="Answer" onPress={this.showAnswer} />

                      <MainButton
                        onPress={() => this.answer("correct", question)}
                      >
                        Correct
                      </MainButton>
                      <MainButton
                        onPress={() => this.answer("Incorrect", question)}
                      >
                        Incorrect
                      </MainButton>
                    </View>
                  )}
                </View>
              );
            }
          })}
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

export default Quiz;
