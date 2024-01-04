import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import SongCard from '../components/SongCard';
import Bio from '../components/Bio';
import LatestSong from '../components/LatestSong';

const Profile = ({ user, onLogout }) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jouwnaam.vaw.be/api.php')
      .then(response => response.json())
      .then(json => {
        setSongs(json.songs);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching data: {error.message}</Text>
      </View>
    );
  }

  // Extracting the first and second songs' data
  const firstSong = songs.length > 0 ? songs[0] : null;
  const secondSong = songs.length > 1 ? songs[1] : null;
  const thirdSong = songs.length > 2 ? songs[2] : null; // Get the second song

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Bio user={user} />
        <LatestSong text="Latest Songs*" />
        <View style={styles.songsRow}>
          {firstSong && (
            <SongCard 
              songKey={firstSong.songs_id} 
              songTitle={firstSong.title} 
              price={`$${firstSong.price}`} 
              imageUrl="meaning.png"
            />
          )}
          {secondSong && (
            <SongCard 
              songKey={secondSong.songs_id} 
              songTitle={secondSong.title} 
              price={`$${secondSong.price}`}
              imageUrl="butterflies.png"
            />
          )}
        {thirdSong && (
            <SongCard 
              songKey={thirdSong.songs_id} 
              songTitle={thirdSong.title} 
              price={`$${thirdSong.price}`}
              imageUrl="blur.png"
            />
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingBottom: 10,
  },
  scroll: {
    flex: 1
  },
  songsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#0F1320', // Button background color
    padding: 10, // Button padding
    borderRadius: 5, // Button border radius
    marginTop: 20, // Margin top
    marginHorizontal: 20, // Horizontal margin
    alignItems: 'center', // Center text horizontally
  },
  logoutButtonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16, // Text font size
  }
});

export default Profile;
