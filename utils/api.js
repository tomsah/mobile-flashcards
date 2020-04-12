import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, isDataExist } from './_data'

 // getDecks: return all of the decks along with their titles, questions, and
// answers.
export function fetchAllDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(value => isDataExist(JSON.parse(value)))
}
//   getDeck: take in a single id argument and return the deck associated
//  with that id.
export function getDeck(id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((value => {
    const data = JSON.parse(value)
    return {[id]: data[id]}
  }))
}

 // saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title] : {}}))
}


 // addCardToDeck: take in two arguments, title and card, and will add the
// card to the list of questions for the deck with the associated title.
export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({[title] :{[card.question] : card.answer}}))
}
