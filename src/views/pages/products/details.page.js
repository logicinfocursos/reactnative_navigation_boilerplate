import { View, Text, Button } from 'react-native'

export function DetailsPage({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>detalhes do produto</Text>
        <Text>página anterior: </Text>
        <Button
          title='retornar página anterior'
          onPress={() => navigation.goBack()}
        />
      </View>
    )
  }