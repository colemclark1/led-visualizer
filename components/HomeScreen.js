import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Pick a Color"
        onPress={() => navigate('MusicVisualizer', {name: 'Jane'})}
      />
    );
  }
}
export default HomeScreen
