// SummaryCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SummaryCard = ({ summary }) => (
  <View style={styles.summaryCard}>
    <Text style={styles.summaryTitle}>*Everdawn*</Text>
    <Text style={styles.summaryEarnings}>{summary}</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>See history</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: '#262626',
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  summaryTitle: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  summaryEarnings: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 20,
    color: '#00FF00', // Replace with your earnings highlight color
    marginBottom: 5,
  },
  button: {
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SummaryCard;
