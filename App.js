
import { StyleSheet, Text, View } from 'react-native';
import home from './scr/paginas/home';
import contato from './scr/paginas/contato';
import sobre from './scr/paginas/sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

      <Tab.Screen name="home" component = {home}></Tab.Screen>
      <Tab.Screen name="contato" component = {contato}></Tab.Screen>
      <Tab.Screen name="sobre" component = {sobre}></Tab.Screen>

      </Tab.Navigator>

    </NavigationContainer>
  );
}
