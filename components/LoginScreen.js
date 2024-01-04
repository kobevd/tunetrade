import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users data when the component mounts
    fetch('https://jouwnaam.vaw.be/api.php')
      .then(response => response.json())
      .then(json => setUsers(json.users))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  const handleLogin = () => {
    // Find user with matching username
    const user = users.find(u => u.username === username);

    if (user) {
      // Since password comparison isn't possible here, we just pass the user data
      onLogin(user); 
    } else {
      Alert.alert('Login Failed', 'User not found or password is incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#A9A9A9"
      />
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleLogin} color="#0F1320" />
        <Button title="Add User" onPress={onRegister} />  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
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
