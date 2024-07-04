import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { HomePage, OrdersPage, ProductsListPage, DetailsPage, SettingsPage } from './src/views/pages'


const HomeStack = createStackNavigator() // Configuração da Stack Navigation para a página Home
const Tab = createBottomTabNavigator() // Configuração da Bottom Tab Navigation


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        headerShown={false}
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Orders') {
              iconName = focused ? 'cart' : 'cart-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },         
        })}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name='Orders' component={OrdersPage} />
        <Tab.Screen name='Settings' component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


function HomeStackScreen() {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} 
    >
      <HomeStack.Screen
        name='Home'
        component={HomePage}
         />
      <HomeStack.Screen
        name='ProductsListPage'
        component={ProductsListPage}
        />
         <HomeStack.Screen
        name='DetailsPage'
        component={DetailsPage}
        />
    </HomeStack.Navigator>
  )
}



