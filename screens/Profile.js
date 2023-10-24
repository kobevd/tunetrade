
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';



export default function Profile({navigation}) {

  

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Profile Screen</Text>
      <TouchableOpacity onPress={() => {
    navigation.navigate('Settingss')
   }}> 
   
   <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Click Me</Text>
   </TouchableOpacity>


      
    </View>
  );





  
}








