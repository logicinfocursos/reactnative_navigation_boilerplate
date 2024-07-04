// src\views\pages\settings\settings.page.js
import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native'

import { styles } from './styles/settings.styles'
import setup from '../../../configurations/setup.json'

export const SettingsPage = () => {
  const data = [
    {
      id: 1,
      name: 'Comunity',
      image: 'https://img.icons8.com/clouds/100/000000/groups.png',
      count: 124.711,
    },
    {
      id: 2,
      name: 'Housing',
      image: 'https://img.icons8.com/color/100/000000/real-estate.png',
      count: 234.722,
    },
    {
      id: 3,
      name: 'Jobs',
      image: 'https://img.icons8.com/color/100/000000/find-matching-job.png',
      count: 324.723,
    },
    {
      id: 4,
      name: 'Personal',
      image: 'https://img.icons8.com/clouds/100/000000/employee-card.png',
      count: 154.573,
    },
    {
      id: 5,
      name: 'For sale',
      image: 'https://img.icons8.com/color/100/000000/land-sales.png',
      count: 124.678,
    },
  ]

  const [options, setOptions] = useState(setup.mainMenu)

  const clickEventListener = item => {
    Alert.alert('Mensagem', 'item selecionado: ' + item.name)
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        data={options}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => clickEventListener(item)}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.id}</Text>
                <TouchableOpacity
                  style={styles.followButton}
                  onPress={() => clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

