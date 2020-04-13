import { AsyncStorage } from 'react-native';
export const DECK_STORAGE_KEY = 'mobile-Flashcard:decks'

const decks = {
  deckOne: {
    question1 : 'answer 1',
    question2 : 'answer 2',
    question3 : 'answer 3',
    question4 : 'answer 4',
  },
  deckTwo: {
    question1 : 'answer 1',
    question2 : 'answer 2',
  },
  deckThree: {
   ' is the sun yellow ?' : 'correct',
    'is the sea blue' : 'correct',
    'is Paris in Italy': 'Incorrect',
    'is 2 + 2 = 4' : 'correct',
  }
}

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export async function storeData  () {
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
