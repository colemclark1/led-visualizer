import React, { Component } from 'react';
import { Text, View, Button} from 'react-native';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Pick a Color"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}
export default Profile
