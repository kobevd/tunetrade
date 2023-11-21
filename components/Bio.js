import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const cardPadding = 30; // Padding inside the card
const imageSize = 100; // Increased size of the profile image

const Bio = () => {
  return (
    <View style={styles.container}>
      {/* Background image for the entire screen */}
      <Image source={require('../img/header-image.png')} style={styles.backgroundImage} />
      {/* Bio card */}
      <View style={styles.card}>
        <Image source={require('../img/profile.png')} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>[YOUR_NAME]</Text>
          <Text style={styles.title}>Artist</Text>
          <Text style={styles.description}>
            A crazy creative producer/artist looking for investments and music enjoyers
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center children horizontally
    justifyContent: 'center', // Center children vertically
    marginBottom: 50,
  },
  backgroundImage: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight * 0.3, // Extended height by 20%
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#262626', // Replace with the exact color of the card background
    marginTop: 10,
    borderRadius: 20,
    width: windowWidth * 0.9, // Adjust width to 90% of the window width
    flexDirection: 'row',
    alignItems: 'center',
    padding: cardPadding,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginRight: cardPadding,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 18, // Reduced font size
    color: '#9CE1F5',
    padding: 2,
  },
  title: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 16, // Reduced font size
    color: '#FFFFFF',
    marginVertical: 2,
    padding: 2,
  },
  description: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 12, // Reduced font size
    color: '#FFFFFF',
    padding: 2,
  },
});

export default Bio;
