import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CardView = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F0833D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 250,
    height: 55,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular', 
  },
});

export default CardView;
