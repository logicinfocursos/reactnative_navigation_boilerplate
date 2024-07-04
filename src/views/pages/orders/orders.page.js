// src\views\pages\orders\orders.page.js
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'

import { styles } from './styles/orders.styles'
import db from '../../../data/db.json'


export const OrdersPage = () => {
  const [products, setProducts] = useState(db.products)

  const handleIncrement = (item) => {
    setProducts(
      products.map((product) =>
        product.id === item.id ? { ...product, amount: product.amount + 1 } : product
      )
    )
  }


  const handleDecrement = (item) => {
    setProducts(
      products.map((product) =>
        product.id === item.id ? { ...product, amount: Math.max(0, product.amount - 1) } : product
      )
    )
  }


  const renderProductItem = ({ item }) => (
    <ProductCard item={item} onIncrement={() => handleIncrement(item)} onDecrement={() => handleDecrement(item)} />
  )


  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>continuar</Text>
      </TouchableOpacity>
    </View>
  )
}


const ProductCard = ({ item, onIncrement, onDecrement }) => {
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name.substring(0, 20)}</Text>
        <Text style={styles.productDescription}>{item.details.substring(0, 30)}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)} <Text style={styles.productPriceText}>por unid</Text></Text>
      </View>
      <View style={styles.productAmount}>
        <TouchableOpacity style={styles.amountButton} onPress={onDecrement}>
          <Text style={styles.amountButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.amountText}>{item.amount}</Text>
        <TouchableOpacity style={styles.amountButton} onPress={onIncrement}>
          <Text style={styles.amountButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
