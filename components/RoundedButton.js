import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const RoundedButton = ({title, style, onPress}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'dodgerblue',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default RoundedButton;
