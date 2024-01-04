import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const FetchComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jouwnaam.vaw.be/api.php')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching data: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Data from CMS:</Text>
      {/* Render your data here */}
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Add other styles as needed
});

export default FetchComponent;
