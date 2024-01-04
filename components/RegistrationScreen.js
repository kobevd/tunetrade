import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Switch, Alert } from 'react-native';

const RegistrationScreen = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isArtist, setIsArtist] = useState(false);
  const [bio, setBio] = useState('');

  const handleRegister = () => {
    const userData = {
      username, 
      password, 
      email, 
      is_artist: isArtist,
      bio
    };

    fetch('https://jouwnaam.vaw.be/api.php?action=add_post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Registration successful', data);
      Alert.alert('Registration Successful', 'Your account has been created.');
      onRegister(); // Navigate back or update state as necessary
    })
    .catch(error => {
      console.error('Registration failed:', error);
      Alert.alert('Registration Failed', error.toString());
    });
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry
        style={styles.input} 
      />
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input} 
      />
      <View style={styles.switchContainer}>
        <Text>Are you an artist?</Text>
        <Switch 
          value={isArtist} 
          onValueChange={setIsArtist}
        />
      </View>
      <TextInput 
        placeholder="Bio" 
        value={bio} 
        onChangeText={setBio} 
        style={styles.input} 
        multiline
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default RegistrationScreen;
