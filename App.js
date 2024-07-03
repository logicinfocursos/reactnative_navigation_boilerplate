import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'


const HomeStack = createStackNavigator() // Configuração da Stack Navigation para a página Home
const Tab = createBottomTabNavigator() // Configuração da Bottom Tab Navigation


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        headerShown={false}
        initialRouteName="Settings"
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
        name='ProductDetails'
        component={ProductDetailsPage}
        />
    </HomeStack.Navigator>
  )
}


// Definição dos componentes das páginas
function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
      <Button
        title='Ir para Detalhes do Produto'
        onPress={() => navigation.navigate('ProductDetails')}
      />
    </View>
  )
}


function ProductDetailsPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalhes do Produto</Text>
    </View>
  )
}


function OrdersPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pedidos</Text>
    </View>
  )
}


function SettingsPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configurações</Text>
    </View>
  )
}

