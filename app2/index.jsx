import { View, Text, Pressable } from 'react-native';
import  { router } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>

      <Pressable onPress={() => router.push('/about')}>
        <Text style={{ color: 'blue', marginTop: 16}}>
          Go to About
        </Text>
      </Pressable>
    </View>
  )
}