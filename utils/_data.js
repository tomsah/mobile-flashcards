import { AsyncStorage } from 'react-native';
export const DECK_STORAGE_KEY = 'mobile-Flashcard:decks'

const decks = {
  deckOne: {
    question1 : 'answer 1',
    question2 : 'answer 2',
    question3 : 'answer 3',
  },
  deckTwo: {
    question1 : 'answer 1',
    question2 : 'answer 2',
  },
  deckThree: {
    question1 : 'answer 1',
    question2 : 'answer 2',
    question3 : 'answer 3',
    question4 : 'answer 4',
  }
}

function setMissingData(data) {
  console.log('new data to store', data)
}

export async function storeData  () {
  console.log('storeData', decks, typeof decks)
  try {
    await AsyncStorage.setItem( DECK_STORAGE_KEY, JSON.stringify(decks));
  } catch (error) {
    console.log('storeData => error: ', error)
  }
}

export async function isDataExist(data) {
  console.log('foo', data, typeof data)
  return data === null ? storeData() : data
}
