import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Dropdown from '../components/Dropdown';
import SongInfoCard from '../components/SongInfoCard';
import ChartComponent from '../components/ChartComponent';
import SummaryCard from '../components/SummaryCard';





const Settings = () => {
  const [song, setSong] = useState('');
  const [timeframe, setTimeframe] = useState('');

  const songItems =  [ 
    { label: 'Everdawn', value: 'everdawn' },
    { label: 'Free Fall', value: 'free_fall' },
    // ... add more songs as needed
  ];

  const timeframeItems = [
    { label: 'This Week', value: 'thisWeek' },
    { label: 'This Month', value: 'thisMonth' },
    // ... add more timeframes as needed
  ];

  const chartData = [45, 56, 55, 60, 70, 80, 85]; // Replace with your data
  const chartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]; // Replace with your labels

  return (
    <ScrollView style={styles.container}>
      {/* ... other components */}
      <View style={styles.dropdownsContainer}>
        <Dropdown
          items={songItems}
          onValueChange={(value) => setSong(value)}
          placeholder={{ label: 'Song', value: null }}
          value={song}
        />
        <Dropdown
          items={timeframeItems}
          onValueChange={(value) => setTimeframe(value)}
          placeholder={{ label: 'Timeframe', value: null }}
          value={timeframe}
        />
      </View>
      <SongInfoCard
        songImage={require('../img/everdawn.png')} // Replace with your image path
        songTitle="Everdawn"
        artistName="Saino" 
        price="$60"
        investments="50x"
      />
      <ChartComponent data={chartData} labels={chartLabels} />
      <SummaryCard 
  songTitle="Everdawn"
  earnings="$1000"
  investments="50x"
  onPressSeeHistory={() => {
    // Handle the 'See History' button press
  }}
/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  dropdownsContainer: {
    flexDirection: 'row', // Align dropdowns in a row
    justifyContent: 'space-evenly', // Evenly distribute space around dropdowns
    paddingHorizontal: 20, // Padding from the sides of the screen
    marginBottom: 20, // Margin below the dropdowns
    color: '#fff',
  },
  // ... rest of your styles
});



export default Settings;








