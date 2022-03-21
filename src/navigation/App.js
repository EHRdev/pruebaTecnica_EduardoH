/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler'; // Navigation
import * as React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { appDark, appYellow } from '../components/colors';
import Home from '../screens/Home';
import ListHeroes from '../screens/ListHeroes';
import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...Platform.select({
          ios: {
            headerStyle: {
              backgroundColor: '#1C1E35',
              height: 110,
              elevation: 0,
              shadowColor: 'transparent',
            },
            headerTintColor: appYellow,
          },
          android: {
            headerStyle: {
              backgroundColor: '#1C1E35',
              height: 70,
              elevation: 0,
              //shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
          },
        }),
        cardStyle: { backgroundColor: appDark },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        // title: 'App Name'
        options={{ 
          headerTitle: (props) => (
            <Image style={{ width: 150, height: 50, resizeMode: 'contain', alignSelf: 'center' }} source={require('../../assets/marvel-heroes.png')}/>
          )}}
      />
      <Stack.Screen
        name="ListHeroes"
        component={ListHeroes}
        // title: 'App Name'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        // title: 'App Name'
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
