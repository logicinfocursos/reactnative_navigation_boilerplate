# reactnative_navigation_boilerplate
[fontes deste projeto](https://github.com/logicinfocursos/reactnative_navigation_boilerplate)

A ideia é dispor um esqueleto inicial para agilizar o desenvolvimento de um novo projeto em [React Native](https://reactnative.dev/docs/getting-started) com aquelas configurações standards.

Para configurar o ambiente e instalar as dependências necessárias para o projeto [React Native](https://reactnative.dev/docs/getting-started) usando [Expo](https://docs.expo.dev/get-started/introduction/) e [React Navigation](https://reactnavigation.org/docs/getting-started/) com navegação [Stack](https://reactnavigation.org/docs/stack-navigator) e [Bottom Tab](https://reactnavigation.org/docs/bottom-tab-navigator), siga os passos abaixo:

### Passo 1: Instalação do Node.js e do Expo CLI
a) <strong>Node.js:</strong> Certifique-se de que o Node.js está instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js.

b) <strong>[Expo CLI](https://docs.expo.dev/more/expo-cli/):</strong> Instale o [Expo CLI](https://docs.expo.dev/more/expo-cli/) globalmente usando o [npm (Node Package Manager)](https://www.npmjs.com/) com o comando abaixo no terminal:
<pre>
c:\> npm install -g expo-cli
</pre>

### Passo 2: Criação do Projeto Expo
a) Criar um Novo Projeto Expo: No terminal, navegue até o diretório onde deseja criar o projeto e execute o seguinte comando:
<pre>
c:\> expo init NomeDoProjeto   // por exemplo app
</pre>

Siga as instruções no terminal para escolher um template. Para este projeto, você pode escolher o template "blank" (projeto vazio).

Navegue até o Diretório do Projeto: Após a criação do projeto, acesse o diretório do projeto com:
<pre>
c:\> cd NomeDoProjeto    // por exemplo app
</pre>

### Passo 3: Instalação do React Navigation e Dependências
a) Instalação do React Navigation: Execute o seguinte comando no terminal dentro do diretório do projeto para instalar o React Navigation:
<pre>
c:\app> npm install @react-navigation/native
</pre>
b) Instalação das Dependências do Expo: Instale as dependências necessárias do Expo para o React Navigation com:
<pre>
c:\app> expo install react-native-screens react-native-safe-area-context
</pre>

### Passo 4: Instalação dos Navegadores Stack e Bottom Tabs
a) Navegação Stack: Instale o pacote de navegação Stack com:
<pre>
c:\app> npm install @react-navigation/stack
</pre>
b) Navegação Bottom Tabs: Instale o pacote de navegação Bottom Tabs com:
<pre>
c:\app> npm install @react-navigation/bottom-tabs
</pre>
### Passo 5: Iniciar o Projeto
Inicie o Projeto Expo: Com todas as dependências instaladas, você pode iniciar o servidor de desenvolvimento do Expo com:
<pre>
c:\app> npm start
</pre>
Isso abrirá uma nova aba no seu navegador com o Expo Developer Tools, onde você pode escanear o QR code com o aplicativo Expo Go (disponível na App Store e Google Play) para visualizar o aplicativo no seu dispositivo móvel, ou usar um emulador dispositivos android ou iOS.
### Passo 6: Desenvolvimento
Agora, você pode começar a desenvolver seu aplicativo. O código fornecido anteriormente pode ser colocado no arquivo App.js do seu projeto para configurar a navegação Stack e Bottom Tabs.
### Passo 7: Testes
Teste o aplicativo em diferentes dispositivos e emuladores para garantir que a navegação está funcionando conforme esperado.
Seguindo estes passos, você terá configurado o ambiente e instalado todas as dependências necessárias para começar a desenvolver seu projeto [React Native](https://reactnative.dev/docs/getting-started) usando [Expo](https://docs.expo.dev/get-started/introduction/) e [React Navigation](https://reactnavigation.org/docs/getting-started/).

### Passo 8: copiar o código de exemplo
<pre>
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
</pre>

### deixando esse template mais completo
<pre>
c:\app> npm i axios
</pre>

para executar o app no browser, instalar as seguintes dependências:
<pre>
c:\app> npx expo install react-native-web react-dom @expo/metro-runtime
</pre>

### baixando o projeto no github
download do código:nodejs_apiGet_example: https://github.com/logicinfocursos/nodejs_apiGet_example.git

ao clonar o projeto ou baixar o arquivo .zip, não se esqueça de gerar a pasta node_modules para obter os plugins usados no projeto, para tanto digitar no terminal:

<pre>
c:\app> npm i
</pre>

## referências
- [node js](https://nodejs.org/pt/learn/getting-started/introduction-to-nodejs)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/get-started/introduction/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### plugins vscode
- [react native plus](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)
- [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [prettier - code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [thunder client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)


# sempre úteis
- [ejs](https://ejs.co/#promo)
- [axios](https://axios-http.com/)
- [express](https://expressjs.com/en/starter/hello-world.html)
- [typescript](https://www.typescriptlang.org/docs/)
- [bootstrap](https://getbootstrap.com/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [vscode](https://code.visualstudio.com/download)
- [postman](https://www.postman.com/downloads/)
- [insomnia](https://insomnia.rest/download)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)


# sobre a logicinfo
Somos uma consultoria em T.I. e atuamos com desenvolvimento de aplicações para todos os segumentos e mantemos também uma estrutura de treinamento com as melhores soluções para o aprendizado em programação.

Alguns de nossos serviços:

desenvolvimento de aplicações mobile, web e desktop
I.A. Generativa - tenha um I.A. focada em seu negócio, atendendo os seus clientes e fornecedores por whatsapp, chat e U.R.A.
Visite o nosso site: [logicinfo.com.br](logicinfo.com.br)

Fale consoco: whatsapp: 11 9 8627 4173 e-mail: [contato@logicinfo.com.br](contato@logicinfo.com.br)