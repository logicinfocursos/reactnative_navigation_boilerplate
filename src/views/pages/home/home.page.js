// src\views\pages\home\home.page.js
import { useState, useEffect } from 'react'
import { ScrollView, SafeAreaView, Text, View, TouchableOpacity, Image, Alert, FlatList, Button, } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { apiGET } from '../../../services/api'

import { styles } from './styles/home.styles'
import setup from '../../../configurations/setup.json'


export function HomePage({ navigation }) {


  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState(setup.mainMenu)
  // const navigation = useNavigation()


  const fetchdata = async () => {
    // const _products = await apiGET()

    // setProducts(_products)
  }


  useEffect(() => {
   // fetchdata()
  }, [])



  return (
    <View style={styles.container}>
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={options}
      horizontal={false}
      numColumns={2}
      keyExtractor={item => {
        return item.id
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate(item.route)}>
            <View style={styles.cardHeader}>
              <Text style={styles.title}>{item.name}</Text>
              <Image
                style={styles.icon}
                source={{ uri: 'https://img.icons8.com/ios/40/000000/settings.png' }}
              />
            </View>
            <Image style={styles.cardImage} source={{ uri: item.image }} />
            <View style={styles.cardFooter}>
              <Text style={styles.subTitle}>{item.id} members</Text>
            </View>
          </TouchableOpacity>
        )
      }}
    />
  </View>
  )
}

