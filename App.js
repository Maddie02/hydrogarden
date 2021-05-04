import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import * as firebase from 'firebase';
import { 
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from '@env'
import { useState } from 'react';
import UserTabs from './components/UserTabs';
import UserContext from './context/UserContext';
import Loader from './components/Loader';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {

  const [loaded, setLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (user) => {
    setLoggedIn(true);
    setLoaded(true);
    setUser(user);
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        login(user);
      }
    })
  }, [])

  if (!loaded) {
    return (
      <Loader />
    )
  }

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <UserContext.Provider value={{
      user,
      login,
      logout: async () => {
        await firebase.auth().signOut();
      }
    }}>
      <NavigationContainer>
        <UserTabs />
      </NavigationContainer>
    </UserContext.Provider>
  )

}

