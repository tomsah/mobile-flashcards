import { AsyncStorage } from 'react-native';
export const DECK_STORAGE_KEY = 'mobile-Flashcard:decks'

const decks = {}

export async function storeData  () {
  try {
    await AsyncStorage.setItem( DECK_STORAGE_KEY, JSON.stringify(decks));
  } catch (error) {
    console.log('storeData => error: ', error)
  }
}

export async function isDataExist(data) {
  return data === null ? storeData() : data
}
