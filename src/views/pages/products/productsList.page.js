// src\views\pages\products\productsList.page.js
import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'

import { styles } from './styles/productsList.styles'
import db from '../../../data/db.json'

export const ProductsListPage = ({ navigation }) => {


  const [comments, setComments] = useState(db.products)

  return (
    <SafeAreaView >
      <FlatList
        style={styles.root}
        data={comments}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />
        }}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={item => {
          const product = item.item
          return (

            <TouchableOpacity onPress={() => navigation.navigate('DetailsPage', { product: product })} style={styles.container}>
              <Image style={styles.image} source={{ uri: product.image }} />
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text style={styles.name}>{product.name.substring(0,30)}</Text>
                  <Text style={styles.time}>{product.status === 1 ? 'ativo' : 'inatito'}</Text>
                </View>
                <Text rkType="primary3 mediumLine">{product.details.substring(0,70)}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </SafeAreaView>
  )
}
