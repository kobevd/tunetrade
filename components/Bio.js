import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const cardPadding = 30;
const imageSize = 100;

const Bio = ({ user }) => {
  const userName = user ? user.username : 'Unknown Artist';
  const userType = user && user.is_artist === "1" ? 'Artist' : 'User';
  const userBio = 'A placeholder bio until you have real bio data';

  return (
    <View style={styles.container}>
      <Image source={require('../img/header-image.png')} style={styles.backgroundImage} />
      <View style={styles.card}>
        <Image source={require('../img/profile.png')} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.title}>{userType}</Text>
          <Text style={styles.description}>{userBio}</Text>
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
    fontSize: 18, // Reduced font size
    color: '#9CE1F5',
    padding: 2,
  },
  title: {
    fontSize: 16, // Reduced font size
    color: '#FFFFFF',
    marginVertical: 2,
    padding: 2,
  },
  description: {
    fontSize: 12, // Reduced font size
    color: '#FFFFFF',
    padding: 2,
  },
});

export default Bio;
