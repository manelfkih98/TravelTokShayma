import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import VideoList from '../Components/VideoList';

function ProfileScreen() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const [profileImage, setProfileImage] = useState(null);
  const [profileVideo, setProfileVideo] = useState(null);

  const handleChooseMedia = async (mediaType) => {
    try {
      let pickerResult;
      if (mediaType === 'image') {
        pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
      } else if (mediaType === 'video') {
        pickerResult = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
      }
  
      if (!pickerResult.cancelled) {
        if (mediaType === 'image') {
          setProfileImage(pickerResult.uri);
          setProfileVideo(null); 
        } else if (mediaType === 'video') {
          setProfileVideo(pickerResult.uri);
          setProfileImage(null); 
        }
      }
    } catch (error) {
      console.log('Error picking media: ', error);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        
        <Text style={styles.addProfileImageText}>Username</Text>
         
        <Text style={styles.bio}>Bio....</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('EditProfil')}>
          <Text style={styles.button}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity  >
          {profileVideo ? (
            <Video
              source={{ uri: profileVideo }}
              style={styles.profileVideo}
              resizeMode="cover"
              shouldPlay
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Image
                source={require('../assets/Ellipse.png')}
                style={styles.image3}
              />
              <Image
                source={require('../assets/dd_plus_icon 2.png')}
                style={styles.imageadd}
              />
            </View>
          )}
        </TouchableOpacity>
        
      </View>
      <View>
        <VideoList/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  rectangle: {
    height: 200,
    backgroundColor: '#4369B0',
    borderBottomRightRadius: 58,
    borderBottomLeftRadius: 58,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    position: 'absolute',
    top: 37,
    left: 312,
  },
  imager: {
    position: 'absolute',
    top: 20,
    left: 30,
    width: 25,
    height: 25,
  },
  imagep: {
    position: 'absolute',
    top: 50,
    left: 185,
    resizeMode: 'cover',
    width: 30,
    height: 30,
  },
  errorMessage: {
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
    top: 95,
    left: 140,
  },
  bio: {
    position: 'absolute',
    fontSize: 14,
    color: '#FFFFFF',
    top: 120,
    left: 140,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#F0833D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 135,
    height: 30,
    borderRadius: 5,
    left:115,
    top: 150, 
    color: 'white',
    fontSize: 12,  
  },
  image3:{
    position: 'absolute', 
    top: 150, 
    left:255,
    width:30,
    height:30,
  },
  imageadd:{
    position: 'absolute', 
    top: 155, 
    left:260,
    width:18,
    height:18,
  },
  profileVideo: {

width: '100%',
height: '100%',
},
});

export default ProfileScreen;
