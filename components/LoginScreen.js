// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login function
    onLogin(username, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#A9A9A9" // Placeholder text color
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#A9A9A9" // Placeholder text color
      />

      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleLogin} color="#0F1320" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Assuming a white background
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#0F1320',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    color: '#0F1320',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default LoginScreen;
