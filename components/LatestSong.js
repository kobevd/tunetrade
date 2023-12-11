// Title.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LatestSong = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#9CE1F5', // Replace with the color you want for the title text
    paddingHorizontal: 25, // Alignment padding
    marginTop: 32, // Space from the top, adjust as needed
    marginBottom: 16, // Space before the content below, adjust as needed
  },
});

export default LatestSong;
