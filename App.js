import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeStack from './screens/HomeStack';
import Profile from './screens/Profile'; // Assuming you have a Profile screen
import Settings from './screens/Settings';
import SongPlayerScreen  from './screens/SongPlayerScreen';
import LoginScreen from './components/LoginScreen'; // Adjust the path as needed





const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#0F1320',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TuneTrade') {
              iconName = 'music';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="TuneTrade"
          component={HomeStack}
          options={{
            title: 'Home',
            headerStyle: { backgroundColor: '#0F1320' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerStyle: { backgroundColor: '#0F1320' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Investments',
            headerStyle: { backgroundColor: '#0F1320' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
