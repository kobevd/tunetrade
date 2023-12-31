// MusicItem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MusicItem = ({ albumCover, songTitle, artistName, price, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={albumCover} style={styles.albumCover} />
      <View style={styles.textContainer}>
        <Text style={styles.songTitle}>{songTitle}</Text>
        <Text style={styles.artistName}>{artistName}</Text>
      </View>
      <Text style={styles.priceTag}>{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20, // To allow for whitespace on both sides
    marginHorizontal: 20, // This adds the 40 pixels of whitespace on both sides
    backgroundColor: '#262626', // Set a background color to separate items
    marginBottom: 10, // Add space between the items
    borderRadius: 10, // Match your design's border radius
  },
  albumCover: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12, // Space between image and text
  },
  songTitle: {
    fontSize: 18,
    color: '#FFF',
  },
  artistName: {
    fontSize: 16,
    color: '#A7A7A7', // Adjust the color to match the design
  },
  priceTag: {
    fontSize: 18,
    color: '#FFF',
  },
});

export default MusicItem;
