import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Cat () {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello testing</Text>
      <Text>Testing</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text1: {
    color: 'red',
    alignItems: 'center',
    justifyContext: 'center'
  }
})