
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';



export default function Home({ navigation }) {




  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  

  return (
    <View style={styles.container}>

   <TouchableOpacity onPress={() => {
    navigation.navigate('Details')
   }}> 
   
   <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Click Me</Text>
   </TouchableOpacity>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 200,
    height: 200,
    backgroundColor: '#0553',
  },
});









