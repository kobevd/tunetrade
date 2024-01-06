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
      username: username,
      password: password,
      email: email,
      is_artist: isArtist,
      // bio: bio // Uncomment if you also want to send 'bio'
    };

    const apiUrl = 'https://jouwnaam.vaw.be/api.php'; // Replace with your server's URL

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.text())
    .then(text => {
      try {
        const data = JSON.parse(text);
        console.log("Parsed data:", data);
        Alert.alert("Success", "User registered successfully!");
      } catch (error) {
        
      }
      onRegister && onRegister(); // Navigate back after registration attempt
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      Alert.alert("Error", "But user is there, for some reason..");
      onRegister && onRegister(); // Navigate back even if there's a fetch error
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
