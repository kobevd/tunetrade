import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'; // Adjust path as needed
import SongPlayerScreen from './SongPlayerScreen'; // Adjust path as needed

const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} // Assuming you want to hide the header for the home screen
      />
      <HomeStack.Screen 
        name="SongPlayer" 
        component={SongPlayerScreen} 
        options={{ headerTitle: 'Song Player' }} // You can customize this as needed
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
