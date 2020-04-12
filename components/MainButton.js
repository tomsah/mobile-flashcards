import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { purple, white } from '../utils/colors'

export default function MainButton ({children, onPress, style = {}}) {
  return(
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosGoDeckBtn : styles.AndroidGoDeckBtn }
      onPress={onPress}>
      <Text style={[styles.btnText, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iosGoDeckBtn:{
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  AndroidGoDeckBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 20,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: white,
    fontSize: 16,
    textAlign: 'center',
  },
})
