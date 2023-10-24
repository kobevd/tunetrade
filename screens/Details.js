import Settings from './screens/Settings';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Details() {

  

  return (

      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{title: 'Details'}} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
      
  );
}









