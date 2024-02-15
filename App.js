import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import CalculatorScreen from './screen/CalculatorScreen';
import LoginScreen from './screen/LoginScreen';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
      <CalculatorScreen></CalculatorScreen>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"black",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

});

