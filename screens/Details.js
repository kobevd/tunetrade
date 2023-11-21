import Settings from './Settings';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Details() {

  

  return (

      <Stack.Navigator>
        <Stack.Screen name="My Home" component={Profile} options={{title: 'Profile'}} />
        <Stack.Screen name="Details" component={Settings} options={{title: 'Investment'}} />
      </Stack.Navigator>
      
  );
}










