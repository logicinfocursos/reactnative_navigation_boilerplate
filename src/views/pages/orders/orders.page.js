import { View, Text, Button } from 'react-native'

export function OrdersPage({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>pedidos</Text>
        <Button
          title='Ir para Detalhes do Produto'
          onPress={() => navigation.navigate('DetailsPage')}
        />
      </View>
    )
  }