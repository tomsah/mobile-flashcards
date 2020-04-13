import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Platform
} from "react-native";
import { fetchAllDecks } from "../utils/api";
import { white } from "../../mobile-flashcards/utils/colors";
import MainButton from "./MainButton";

class DeckList extends Component {
  state = {
    list: {}
  };

  componentDidMount() {
    this.props.navigation.addListener("focus", () => {
      fetchAllDecks().then(decksList => {
        return this.setState(() => ({ list:decksList }));
      });
    });
  }

  clearAsyncStorage = async () => {
    await AsyncStorage.clear().then(() =>
      fetchAllDecks().then(decksList => {
        return this.setState(() => ({ list: decksList }));
      })
    );
  };

  onPress = deckId => {
    const { navigation } = this.props;
    return navigation.navigate("Deck", { deckId });
  };

  render() {
    const { list } = this.state;
    console.log('state', list)
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Deck List View</Text>
          {Object.keys(list).map(deck => {
            return (
              <View key={deck}>
                <View style={styles.item}>
                  <Text style={{ fontSize: 20, textAlign: "center" }}>
                    {deck}
                  </Text>
                  <Text
                    style={{ fontSize: 18, textAlign: "center", padding: 20 }}
                  >
                    {" "}
                    {Object.keys(list[deck]).length} Cards{" "}
                  </Text>

                  <MainButton onPress={() => this.onPress(deck)}>
                    Go to Deck
                  </MainButton>
                </View>
              </View>
            );
          })}
          <Button title="reset storage" onPress={this.clearAsyncStorage} />
        </ScrollView>
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
    elevation: 3,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
});

export default DeckList;
