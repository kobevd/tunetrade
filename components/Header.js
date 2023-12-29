import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/header-image.png')} // Make sure the image is in the correct path
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 32,
    color: '#FFF', // Replace with the exact color from your design
    position: 'absolute', // Position absolutely to ensure it's at the top
    top: 0, // Align to the top
    width: '100%', // Ensure it spans the width of the screen
    textAlign: 'center', // Center the text
    zIndex: 2, // Ensure the text is layered above the image
  },
  headerImage: {
    width: Dimensions.get('window').width, // Set the width to the width of the device
    height: undefined, // This allows the image to scale its height automatically based on its width
    aspectRatio: 1.5, // Adjust the aspect ratio according to your image
    resizeMode: 'cover', // This will cover the width, potentially clipping the height
  },

  highlightText: {
    position: 'absolute', // Position over the Header image
    top: 230, // Adjust as necessary to place it over the image
    width: '100%',
    alignItems: 'center',
    fontSize: 25,
    color: '#FFF',
    textAlign: 'left',
  },


});

export default Header;
