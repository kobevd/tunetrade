// SongInfoCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SongInfoCard = ({ songImage, songTitle, artistName, price, investments }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={songImage} style={styles.songImage} />
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.songTitle}>{songTitle}</Text>
          <Text style={styles.artistName}>{artistName}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
          <View style={styles.investmentsContainer}>
            <Text style={styles.investmentsText}>{investments}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 10,
    padding: 20, // Standardized padding
    margin: 20, // Standardized margin
  },
  songImage: {
    width: 80, // Increased image size
    height: 80, // Increased image size
    borderRadius: 10,
    marginRight: 20, // Increased space between the image and the details
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
  },
  songTitle: {
    color: '#FFF', // Replace with your title color
    fontSize: 18, // Increased font size
    marginBottom: 4, // Space between title and artist name
  },
  artistName: {
    color: '#FFF', // Replace with your artist name color
    fontSize: 16, // Set font size for the artist name
  },
  infoContainer: {
    alignItems: 'flex-end',
  },
  priceContainer: {
    backgroundColor: '#FF1493', // Adjusted to a different pink shade
    padding: 10, // Increased padding
    borderRadius: 5,
    marginBottom: 5,
  },
  investmentsContainer: {
    backgroundColor: '#FF1493', // Adjusted to a different pink shade
    padding: 10, // Increased padding
    borderRadius: 5,
  },
  priceText: {
    color: '#FFF', // Replace with your price text color
    fontSize: 16, // Increased font size
  },
  investmentsText: {
    color: '#FFF', // Replace with your investments text color
    fontSize: 16, // Increased font size
  },
});

export default SongInfoCard;
