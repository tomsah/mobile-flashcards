import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";
import { fetchAllDecks } from "../utils/api";
import { white, purple } from "../../mobile-flashcards/utils/colors";
import MainButton from './MainButton'

class DeckList extends Component {
  state = {
    list: {}
  };

  componentDidMount() {
    fetchAllDecks().then(decksList => {
      return this.setState(() => ({ list: decksList }));
    });
  }

  clearAsyncStorage = async () => {
    await AsyncStorage.clear().then(() =>
      fetchAllDecks().then(decksList => {
        return this.setState(() => ({ list: decksList }));
      })
    );
  };

  onPress = () => {
    console.log("go to that deck");
  };

  render() {
    const { list } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Deck List View</Text>
        {Object.keys(list).map(deck => {
          console.log("deck", deck);
          return (
            <View style={styles.row}>
              <View style={styles.item} key={deck}>
                <Text style={{ fontSize: 20, textAlign: "center" }}>
                  {deck}
                </Text>
                <Text
                  style={{ fontSize: 18, textAlign: "center", padding: 20 }}
                >
                  {" "}
                  {Object.keys(list[deck]).length} Cards{" "}
                </Text>

                <MainButton onPress={this.onPress}>
                    Go to Deck
                </MainButton>
              </View>
            </View>
          );
        })}

        <Button title="reset storage" onPress={this.clearAsyncStorage} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 24,
    textAlign: "center"
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
  },
  decks: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    // flexDirection: "row",
    padding: 20
  }
});

export default DeckList;
