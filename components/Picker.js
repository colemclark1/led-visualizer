import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'

var hex_to_rgb = (color) => {
  var red_hex = color.substring(1, 3);
  var green_hex = color.substring(3, 5);
  var blue_hex = color.substring(5, 7);

  let r = parseInt(red_hex, 16);
  let g = parseInt(green_hex, 16);
  let b = parseInt(blue_hex, 16);
  var rgb = [r, g, b]
  return rgb
}

const Picker = () => (
  <ColorPicker
    onColorSelected={color => alert(hex_to_rgb(color))}
    style={{flex: 1, backgroundColor: '#000'}}
  />
)
export default Picker;
