// SummaryCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SummaryCard = ({ songTitle, earnings, investments, onPressSeeHistory }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.allTimeEarningsTitle}>All Time Earnings</Text>
      <Text style={styles.songTitle}>{songTitle}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Earnings</Text>
          <Text style={styles.detailValue}>{earnings}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Investments</Text>
          <Text style={styles.detailValue}>{investments}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.historyButton} onPress={onPressSeeHistory}>
        <Text style={styles.historyButtonText}>See History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#262626', // Replace with your card background color
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  allTimeEarningsTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  songTitle: {
    fontSize: 18,
    color: '#1F1F1F',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detail: {
    alignItems: 'center',
  },
  detailTitle: {
    fontSize: 16,
    color: '#FF1493', // Replace with your detail title color (e.g., pink)
  },
  detailValue: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  historyButton: {
    backgroundColor: '#FF1493', // Replace with your button background color (e.g., pink)
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  historyButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SummaryCard;
