import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChatScreen from './ChatScreen';

// Données de profil fictives
const profiles = [
  { id: 1, name: 'John Doe', image: require('../assets/OIP 1.png') },
  { id: 2, name: 'Jane Smith', image: require('../assets/OIP 1.png') },
  { id: 3, name: 'Michael Johnson', image: require('../assets/OIP 1.png') },
  { id: 4, name: 'Emily Wilson', image: require('../assets/OIP 1.png') },
  { id: 5, name: 'David Brown', image: require('../assets/OIP 1.png') },
];

// Composant de profil individuel
const ProfileItem = ({ profile, onPress }) => {
  // Fonction de rendu du dernier message
  const renderLastMessage = () => {
    // Ici, vous pouvez récupérer le dernier message du profil à partir d'une source de données
    const lastMessage = "Dernier message ici";
    return <Text style={styles.lastMessage}>{lastMessage}</Text>;
  };

  return (
    <TouchableOpacity onPress={() => onPress(ChatScreen)}>
      <View style={styles.profileContainer}>
        <Image source={profile.image} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text>{renderLastMessage()}</Text> 
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Composant Message
const MessageScreen = () => {
  // Fonction appelée lorsqu'un profil est sélectionné
  const handleProfilePress = (profile) => {
    console.log('Profil sélectionné:', profile.name);
    // Ici, vous pouvez naviguer vers une autre vue pour commencer à chatter avec ce profil
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        renderItem={({ item }) => <ProfileItem profile={item} onPress={handleProfilePress} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#666',
  },
});

export default MessageScreen;
