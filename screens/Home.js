
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header';
import MusicItem from '../components/MusicItem';




export default function Home({ navigation }) {




  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  

  return (
    <View style={styles.container}>

<Header />
<ScrollView style={styles.scroll}>

      {/* ... other components like Header and Highlight */}
      <MusicItem
        albumCover={require('../img/album-cover-1.png')}
        songTitle="BLUE"
        artistName="Far Caspian"
        price="$60"
      />
      <MusicItem
        albumCover={require('../img/album-cover-2.png')}
        songTitle="YEEEE"
        artistName="T-Smoke"
        share="5x"
        price="$25"
      />
      <MusicItem
        albumCover={require('../img/album-cover-3.png')}
        songTitle="How u feel?"
        artistName="Destroy Lonely"
        price="$50"
      />
      <MusicItem
        albumCover={require('../img/album-cover-4.png')}
        songTitle="Miles Away"
        artistName="Dina Ayada"
        price="$50"
      />
      
      {/* ... additional components or MusicItems */}
    
      </ScrollView>

 

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scroll: {
    flex: 1
  }

});












