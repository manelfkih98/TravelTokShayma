import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Page1Screen() {
  const navigation = useNavigation(); 

  return (
    <ImageBackground
      source={require('../assets/jairph-1XLyzi17Z2M-unsplash 1 (1).png')}
      style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('../assets/traveltok.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/time.png')}
          style={styles.moment}
        />
        <Image
          source={require('../assets/Explore.png')}
          style={styles.explorez}
        />
        {/* Utilisez TouchableOpacity pour rendre le texte "Bienvenue" cliquable */}
        <TouchableOpacity onPress={() => navigation.navigate('Nav')}>
          <Text style={styles.button}>Welcome</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 75,
  },
  moment: {
    marginLeft: 29,
    marginTop: 200,
  },
  explorez: {
    marginLeft: 31,
    marginTop: 20,
  },
  button: {
    position: 'absolute', 
    backgroundColor: '#F0833D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 204,
    height: 40,
    borderRadius: 8,
    alignSelf: 'center',
    top: 200, 
    color: 'white',
    fontSize: 16,
    fontFamily: 'Kavoon',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
});

export default Page1Screen;