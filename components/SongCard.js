import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const cardMargin = 10;
const totalPaddingAndMargin = 80 + (cardMargin * 2 * 3);
const cardWidth = (windowWidth - totalPaddingAndMargin) / 2.5;

const SongCard = ({ songTitle, price, imageUrl }) => {
  // Directly using the image URL from the CMS
  const imageSource = { uri: `https://jouwnaam.vaw.be/pages/uploads/covers/${imageUrl}` };

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={imageSource} style={styles.image} />
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
    height: cardWidth, // Adjust height based on card width
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default SongCard;
