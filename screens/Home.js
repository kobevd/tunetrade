
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import MusicItem from '../components/MusicItem';
import Header from '../components/Header';

export default function Home({ navigation }) {
  const navigateToSongPlayer = () => {
    navigation.navigate('SongPlayer', { 
      songTitle: "FANTA MIX", 
      artistName: "Saino" 
    });
  };


  

  return (
    <View style={styles.container}>

<Header/>
<ScrollView style={styles.scroll}>

<Text style={styles.title}>Top songs*</Text>

        {/* First Music Item with onPress handler */}
          <MusicItem
            albumCover={require('../img/album-cover-1.png')}
            songTitle="FANTA MIX"
            artistName="Saino"
            price="$25"
            onPress={navigateToSongPlayer}
          />
      <MusicItem
        albumCover={require('../img/album-cover-2.png')}
        songTitle="YEEEE"
        artistName="T-Smoke"
        share="5x"
        price="$20"
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
        price="$30"
      />
      <MusicItem
        albumCover={require('../img/album-cover-5.png')}
        songTitle="Wired Love"
        artistName="Saino"
        price="$45"
      />
      <MusicItem
        albumCover={require('../img/album-cover-6.jpg')}
        songTitle="DIXI"
        artistName="DAMP (ft.LARS45)"
        price="$50"
      />
      
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
  },
  title: {
    fontSize: 32,
    color: '#9CE1F5', // Replace with the color you want for the title text
    paddingHorizontal: 20, // Alignment padding
    marginTop: 10, // Space from the top, adjust as needed
    marginBottom: 30, // Space before the content below, adjust as needed
  },
  

});












