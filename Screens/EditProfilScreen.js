import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function EditProfileScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('manel');
  const [bio, setBio] = useState('');
  const [currentPassword, setCurrentPassword] = useState('manel123');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (text, field) => {
    switch (field) {
      case 'name':
        setName(text);
        break;
      case 'bio':
        setBio(text);
        break;
      case 'currentPassword':
        setCurrentPassword(text);
        break;
      case 'newPassword':
        setNewPassword(text);
        break;
      case 'confirmPassword':
        setConfirmPassword(text);
        break;
      default:
        break;
    }
  };

  const handleChooseImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      // Alert.alert('Permission Denied', 'Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setProfileImage(pickerResult.uri);
  };

  const handleConfirm = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    // Handle password change confirmation
  };

  return (
    <View>
      <View style={[styles.rectangle, { width: screenWidth }]}>
        <Image
          source={require('../assets/traveltok ktiba 2.png')}
          style={styles.image}
        />

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/OIP 1.png')}
            style={styles.imagep}
          />
        </View>

        <TouchableOpacity onPress={handleChooseImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.addProfileImageText}>Edit Photo</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.nom}>Username</Text>
      <View style={styles.inputContainer1}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => handleInputChange(text, 'name')}
        />
      </View>

      <Text style={styles.bio}>Bio</Text>
      <View style={styles.inputContainer2}>
        <TextInput
          style={styles.input}
          value={bio}
          onChangeText={(text) => handleInputChange(text, 'bio')}
        />
      </View>

      <Text style={styles.actuel}>Current Password</Text>
      <View style={styles.inputContainer3}>
        <TextInput
          style={styles.input}
          value={currentPassword}
          onChangeText={(text) => handleInputChange(text, 'currentPassword')}
          secureTextEntry={true}
        />
      </View>

      <Text style={styles.Nouveau}>New Password</Text>
      <View style={styles.inputContainer4}>
        <TextInput
          style={styles.input}
          placeholder='New Password'
          value={newPassword}
          onChangeText={(text) => handleInputChange(text, 'newPassword')}
          secureTextEntry={true}
        />
      </View>

      <Text style={styles.Confirmer}>Confirm Password</Text>
      <View style={styles.inputContainer5}>
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          value={confirmPassword}
          onChangeText={(text) => handleInputChange(text, 'confirmPassword')}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  rectangle: {
    height: 190,
    backgroundColor: '#4369B0',  
    borderBottomRightRadius: 58,
    borderBottomLeftRadius:58,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    position: 'absolute', 
    top: 41, 
    left: 312,
  },
  imager: {
    position: 'absolute', 
    top: 20, 
    left:30,
    width:25,
    height:25,
  },
  imagep: {
    position: 'absolute', 
    top: 70, 
    left:180,
    resizeMode: 'cover', 
  },
  errorMessage:{
    color: 'red',
    fontSize: 12,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addProfileImageText: {
    position: 'absolute', 
    fontSize: 14,
    color: '#FFFFFF',
    top: 130, 
    left:140,
  },
  nom:{
    position: 'absolute', 
    top: 220, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 243,
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
    width:147,
    height:35,
    top: 590,
    alignSelf: 'center',
  },
  bio:{
    position: 'absolute', 
    top: 295, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 315,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  actuel: {
    position: 'absolute', 
    top: 360, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  },
  inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 380,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  Nouveau: {
    position: 'absolute', 
    top: 425, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  },
  inputContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 445,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  inputContainer5: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 510,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  Confirmer: {
    position: 'absolute', 
    top: 490, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  }
});

export default EditProfileScreen;
