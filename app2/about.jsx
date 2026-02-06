import { View, Text, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.text}>
          Go Back
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    justifyContent: 'center',
    color: 'red',
    marginTop: 16,
  }
})

