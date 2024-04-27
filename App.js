import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from 'react-native';
import BottomNavigation from './Components/BottomNavigation';
import ConnecterScreen from './Screens/ConnecterScreen';
import EditProfilScreen from './Screens/EditProfilScreen';
import InscrireScreen from './Screens/InscrireScreen';
import Page1Screen from './Screens/Page1Screen';
import Page2Screen from './Screens/Page2Screen';
import ProfilScreen from './Screens/ProfilScreen';
import ChatScreen from "./Screens/ChatScreen";





const Stack = createNativeStackNavigator();

export default function App() {
  return (
   /* <View style={styles.container }>
     <BottomNavigation />
    </View>*/
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1Screen} options={{headerShown:false}}/>
        <Stack.Screen name="Page2" component={Page2Screen}options={{headerShown:false}} />
        <Stack.Screen name="Connecter" component={ConnecterScreen}options={{headerShown:false}} />
        <Stack.Screen name="Inscrire" component={InscrireScreen}options={{headerShown:false}} />
        <Stack.Screen name="EditProfil" component={EditProfilScreen}options={{headerShown:false}} />
        <Stack.Screen name="Profil" component={ProfilScreen}options={{headerShown:false}} />
        <Stack.Screen name="Chat" component={ChatScreen}options={{headerShown:false}} />
        <Stack.Screen name="Nav" component={BottomNavigation} options={{headerShown:false}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center' 
  }
});

