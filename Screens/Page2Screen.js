import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function Page2Screen() {
  const navigation = useNavigation();

  const CardOption = ({ title, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Card containerStyle={styles.card}>
        <Text style={styles.buttonText}>{title}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/jairph-1XLyzi17Z2M-unsplash 1 (1).png')}
      style={styles.background}>
   
      <View style={styles.container}>
        <Image
          source={require('../assets/who.png')}
          style={styles.image}
        />
        <CardOption title="Content Creator" onPress={() => navigation.navigate('Inscrire')} />
        <CardOption title="User" />
        <CardOption title="Branch Manager" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 1,
  },
  card: {
    backgroundColor: '#F0833D',
    width: 250,
    height: 55,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular', 
  },
});

export default Page2Screen;
