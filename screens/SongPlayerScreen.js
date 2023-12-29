import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


// Import or define the audio file URI
const audioUri = require('../songs/Fanta.mp3'); // Update the path to your audio file

const SongPlayerScreen = ({ route }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const songDetails = route?.params || { songTitle: 'Unknown', artistName: 'Unknown Artist' };

  useEffect(() => {
    const loadAudio = async () => {
      console.log('Loading Sound');
      try {
        const { sound: newSound } = await Audio.Sound.createAsync(audioUri);
        setSound(newSound);
      } catch (error) {
        console.error('Error loading sound: ', error);
      }
    };

    loadAudio();

    return () => {
      sound?.unloadAsync();
    };
  }, []);

  const togglePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        console.log('Pausing Sound');
        await sound.pauseAsync();
      } else {
        console.log('Playing Sound');
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else {
      console.log('Sound not loaded');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{songDetails.songTitle}</Text>
      <Text style={styles.artist}>{songDetails.artistName}</Text>

      <Image source={require('../img/album-cover-1.png')} style={styles.songCover} />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome name="backward" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={togglePlayPause}>
          <FontAwesome name={isPlaying ? "pause-circle" : "play-circle"} size={50} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome name="forward" size={30} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1320',
  },
  title: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 10,
  },
  artist: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  songCover: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 30,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButton: {
    marginHorizontal: 20,
  },
});

export default SongPlayerScreen;
