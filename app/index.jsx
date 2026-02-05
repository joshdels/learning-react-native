import { useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'


const Cat = props => {
  const [isFat, setIsFat] = useState(true);

  return (
    <View>
      <Text>Cat mate {props.name} and I am {isFat ? 'fat': 'not-fat'}</Text>
      <Button
        onPress={() => {
          setIsFat(false);
        }}
        disabled={!isFat}
        title={isFat ? 'Need to exercise': "Muscular"}
      />
    </View>
  )
}

const House = () => {
  return (
    <View style={{ flex: 1, padding: 30 }}>
      <Text>Welcome!!</Text>
      <Cat name="Joshua"/>
      <Cat name="2"/>
      <View>
        <Text>There is a cat</Text>
        <Image 
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  )
}

export default House

const styles = StyleSheet.create({})