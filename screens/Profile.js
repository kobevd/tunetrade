// Profile.js
import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import SongCard from '../components/SongCard';
import Bio from '../components/Bio';
import LatestSong from '../components/LatestSong';

const songsData = [
  { key: 'orion', title: 'Orion', price: '$30 - 10%' },
  { key: 'free_fall', title: 'Free Fall', price: '$15 - 5%' },
  { key: 'everdawn', title: 'Everdawn', price: '$50 - 25%' },
  { key: 'butterflies', title: 'Butterflies', price: '$30 - 10%' },
  { key: 'never_ending', title: 'Never Ending ', price: '$15 - 5%' },
  { key: 'uranus', title: 'Uranus', price: '$50 - 25%' },
  { key: 'on_the_go', title: 'On The Go', price: '$50 - 25%' },
  { key: 'blur', title: 'Blur', price: '$50 - 25%' },
  { key: 'meaning', title: 'Meaning', price: '$50 - 25%' },
  // ... more song data
];

const Profile = () => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scroll}>
      <Bio/>
      <LatestSong text="Latest Songs*" />
      <FlatList
        data={songsData}
        renderItem={({ item }) => (
          <SongCard songKey={item.key} songTitle={item.title} price={item.price} />
        )}
        keyExtractor={(item) => item.key}
        numColumns={3} // Set the number of columns for the grid
        contentContainerStyle={styles.songsContainer}
      />
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1320',
  },
  songsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1
  }
});

export default Profile;
