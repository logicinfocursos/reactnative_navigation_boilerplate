// src\views\pages\products\details.page.js
import React from 'react'
import { Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'

import { styles } from './styles/details.styles'


export const DetailsPage = ({ route }) => {

  const product = route.params.product


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={{
              uri: product.image,
            }}
          />
          <Text style={styles.name}>{product.name.substring(0,50)}</Text>
          <Text style={styles.price}>R$ {product.price}</Text>
          <Text style={styles.description}>
          {product.details.substring(0,100)}
          </Text>
        </View>
        <View style={styles.starContainer}>
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
          <Image
            style={styles.star}
            source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
          />
        </View>
        <View style={styles.contentColors}>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#00BFFF' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#FF1493' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#00CED1' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#228B22' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#20B2AA' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#FF4500' }]}></TouchableOpacity>
        </View>
        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>XL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={() => clickEventListener()}>
            <Text style={styles.shareButtonText}>comprar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}


const clickEventListener = () => {
  Alert.alert('Sucesso !', 'produto adicionado ao carrinho!')
}