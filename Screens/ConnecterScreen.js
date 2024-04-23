import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ConnecterScreen() {
  const navigation = useNavigation();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const handleEmailChange = (text) => {
    setEmailValue(text);
  };

  const handlePasswordChange = (text) => {
    setPasswordValue(text);
  };

  const validateFields = () => {
    let isValid = true;

    if (!emailValue) {
      isValid = false;
      Alert.alert('Error', 'Please enter your email');
    } else if (!isValidEmail(emailValue)) {
      isValid = false;
      Alert.alert('Error', 'Please enter a valid email address');
    }

    if (!passwordValue) {
      isValid = false;
      Alert.alert('Error', 'Please enter your password');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleConnect = () => {
    if (validateFields()) {
      console.log('Email:', emailValue);
      console.log('Password:', passwordValue);
      navigation.navigate('Nav');
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.image}>Login</Text>
  <View style={[styles.rectangle, { width: screenWidth }]}>
    
    <Image
      source={require('../assets/Ellipse.png')}
      style={styles.image3}
    />
    <Image
      source={require('../assets/traveltokICONE.png')}
      style={styles.image4}
    />
   <Text style={styles.Email}> Your Email</Text>
    <View style={styles.inputContainer1}>
     
      <Image
        source={require('../assets/email 5.png')}
        style={styles.icon}
      />
     
      <TextInput
        style={styles.input}
        value={emailValue}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
    </View>
    <Text style={styles.Mot_de_passe}> Your Password</Text>
    <View style={styles.inputContainer3}>
     
      <Image
        source={require('../assets/fermer-a-cle 6.png')}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={passwordValue}
        onChangeText={handlePasswordChange}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
    </View>
  
    <TouchableOpacity style={styles.button} onPress={() => {
  handleConnect()
  
}}>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
  
    <Text style={styles.text3}>or login with</Text>
  
    <TouchableOpacity style={styles.buttong}>
      <Image
        source={require('../assets/googleIcon.png')}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>Google</Text>
    </TouchableOpacity>
  
    <TouchableOpacity style={styles.buttonf}>
      <Image
        source={require('../assets/facebookIcon.png')}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>Facebook</Text>
    </TouchableOpacity>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#4369B0',
  },
  centeredContent: {
    alignItems: 'center', // Centrage vertical
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    marginTop: 80,
    alignSelf: 'center',
    fontSize: 20,
    color: "#FFFFFF",
  },
  image2: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 100,
  },
  image3: {
    position: 'absolute', 
    top: -20, 
    alignSelf: 'center',
  },
  image4: {
    position: 'absolute', 
    top: -13, 
    alignSelf: 'center',
  },
  
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 93,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  Email: {
    position: 'absolute', 
    top: 72,
    left:68,
   
    color:'#F0833D',
    fontSize:12,
  },
  Mot_de_passe: {
    position: 'absolute',
    top: 147,
    left: 59,
    color: '#F0833D',
    fontSize: 12,
  },
  inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 167,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  button: {
    backgroundColor: '#4369B0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    width: 147,
    height: 35,
    top: 234,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  text3: {
    position: 'absolute',
    top: 329,
    color: '#26425A',
    alignSelf: 'center',
  },

  buttong: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0833D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    width: 125,
    height: 35,
    top: 363,
    left: 55,
  },
  buttonIcon: {
    marginRight: 5,
  },
  buttonf: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0833D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    width: 125,
    height: 35,
    top: 363,
    left: 230,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10, // Ajoute une marge à gauche pour laisser de l'espace par rapport au champ de saisie
  },
  rectangle: {
    height: 700,
    top: 195,
    position: 'absolute', 
    backgroundColor: '#FFFFFF',  
    borderTopRightRadius: 58,
    borderTopLeftRadius:58,
  },
});

export default ConnecterScreen;