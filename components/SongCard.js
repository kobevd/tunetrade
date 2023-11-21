import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


// Assume you have a mapping of song keys to image files
const imageSources = {
  'orion': require('../img/orion.png'),
  'free_fall': require('../img/free_fall.png'),
  'everdawn': require('../img/everdawn.png'),
  'uranus': require('../img/uranus.png'),
  'on_the_go': require('../img/on_the_go.png'),
  'butterflies': require('../img/butterflies.png'),
  'never_ending': require('../img/never_ending.png'),
  'blur': require('../img/blur.png'),
  'meaning': require('../img/meaning.png'),
  
  
  // ... other songs
};

const windowWidth = Dimensions.get('window').width;
// Update the cardWidth calculation for larger cards
const cardMargin = 10; // Margin on each side of a card
const totalPaddingAndMargin = 80 + (cardMargin * 2 * 3); // Total padding and margin for all cards
const cardWidth = (windowWidth - totalPaddingAndMargin) / 2.5; // Increase the width of each card



const SongCard = ({ songKey, songTitle, price }) => {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={imageSources[songKey]} style={styles.image} />
      <Text style={styles.title}>{songTitle}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  ); 
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: cardMargin,
    marginRight: cardMargin,
    alignItems: 'center', 
    overflow: 'hidden',
  },
  image: {
    width: '100%', 
    height: cardWidth, 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 16,
    color: '#FFF',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 14,
    color: '#FFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  latestSongsContainer: {
    marginTop: 20,
  },
  latestSongsTitle: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 24,
    color: '#E1E1E1', // Adjust the color as desired
    marginLeft: cardMargin, // Align with the cards
    marginBottom: 10, // Space between the title and the cards
  },
});

export default SongCard;
