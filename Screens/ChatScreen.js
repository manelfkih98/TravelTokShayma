import { Feather } from '@expo/vector-icons'; // Importer Feather icons depuis Expo
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChatMessage = ({ message, isSent }) => {
  const containerStyle = isSent ? styles.sentContainer : styles.receivedContainer;
  const textStyle = isSent ? styles.sentText : styles.receivedText;

  return (
    <View style={[styles.messageContainer, containerStyle]}>
      <Text style={textStyle}>{message}</Text>
    </View>
  );
};

const ChatScreen = () => {
  const chatMessages = [
    { id: 1, message: "Salut, comment ça va ?", isSent: false },
    { id: 2, message: "Ça va bien, merci ! Et toi ?", isSent: true },
    { id: 3, message: "Je vais bien aussi, merci !", isSent: false },
  ];

  return (
    <View style={styles.container}>
      {/* Image transparente en arrière-plan */}
      <Image source={require('../assets/chat4.jpg')} style={styles.backgroundImage} />

      <View style={styles.headerContainer}>
        <View style={styles.header}>
          {/* Fond transparent pour l'image de profil */}
          <View style={styles.profileImageContainer}>
            <Image source={require('../assets/OIP 1.png')} style={styles.profileImage} />
          </View>
          {/* Texte du nom d'utilisateur avec fond transparent */}
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>John Doe</Text>
          </View>
        </View>
      </View>
      
      {/* Liste des messages */}
      <FlatList
        data={chatMessages}
        renderItem={({ item }) => <ChatMessage message={item.message} isSent={item.isSent} />}
        keyExtractor={(item) => item.id.toString()}
      />
      
      {/* Champ de saisie du message avec icône d'envoi */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tapez votre message..."
          placeholderTextColor="#666"
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Feather name="send" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  backgroundImage: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    opacity: 0.3, // Opacité de l'image transparente
  },
  headerContainer: {
    marginTop:5,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fond transparent pour le conteneur de l'en-tête
    paddingVertical: 8,
    borderRadius:20
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft:20,
    marginRight:10
  },
  
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // Couleur du texte du nom d'utilisateur
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 8,
    padding: 12,
    borderRadius: 16,
  },
  sentContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#F0833D',
  },
  receivedContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#4369B0',
  },
  sentText: {
    color: '#FFFFFF',
  },
  receivedText: {
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
  },
  sendButton: {
    paddingHorizontal: 12,
  },
});

export default ChatScreen;
