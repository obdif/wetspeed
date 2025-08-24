// app/(auth)/getstarted.tsx
import React from 'react';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from '../../assets/styles/auth.styles';

const GetStarted = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/(auth)/sign-in'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.wettext}>
        <Text>Wet</Text><Text>Speed</Text>
      </Text>
      <Image source={require('../../assets/images/revenue-i4.png')} style={styles.illustration} />
      <Text style={styles.welcome}>Welcome to WetSpeed</Text>
      <Text style={styles.description}>
        Get started by signing in to access all features and enjoy a seamless experience.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;