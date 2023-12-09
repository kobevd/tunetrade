// ChartComponent.js
import React from 'react';
import { Dimensions, View, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


const ChartComponent = ({ data, labels }) => {
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(255, 20, 147, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    useShadowColorFromDataset: false, // optional
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>Investment Over Time</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // from react-native
        height={220}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#262626',
    padding: 20,
    margin: 20,
  },
  chartTitle: {
    fontFamily: 'SpaceGrotesk',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
});

export default ChartComponent;
