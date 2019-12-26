import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Picker from './components/Picker';
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  MusicVisualizer: {screen: Profile},
});

const App = createAppContainer(MainNavigator);

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <Picker></Picker>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fff'
//   }
// });
