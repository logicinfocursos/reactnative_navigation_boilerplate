import { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { apiGET } from '../../../services/api'

import { styles } from './styles/home.styles'


export function HomePage({ navigation }) {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
 // const navigation = useNavigation()


  const fetchdata = async () => {
   // const _products = await apiGET()

   // setProducts(_products)
  }


  useEffect(() => {
    fetchdata()
  }, [])


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
      <Button
        title='Ir para Detalhes do Produto'
        onPress={() => navigation.navigate('DetailsPage')}
      />
    </View>
  )
}