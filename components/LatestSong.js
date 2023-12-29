// Title.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LatestSong = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#9CE1F5', // Replace with the color you want for the title text
    paddingHorizontal: 20, // Alignment padding
    marginTop: 10, // Space from the top, adjust as needed
    marginBottom: 30, // Space before the content below, adjust as needed
  },
});

export default LatestSong;
