import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import NetInfo from '@react-native-community/netinfo';


const App = () => {
    const [isConnected, setIsConnected] = useState(false);
  
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        setIsConnected(state.isConnected);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Network Connection: {isConnected ? 'Connected' : 'Disconnected'}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
      backgroundColor: '#0553',
    },
  });
  
  export default App;
  
  