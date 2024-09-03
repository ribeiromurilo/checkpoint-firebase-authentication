import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAuth } from '../AuthContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { auth } from '../firebase';

type WelcomeScreenNavigationProp = NavigationProp<RootStackParamList, 'Welcome'>;

const Welcome: React.FC = () => {
  const { currentUser } = useAuth();
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        alert('Failed to log out: ' + error.message);
      } else {
        console.error('An unknown error occurred.');
        alert('Failed to log out: An unknown error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo, {currentUser?.email}!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    color: 'black',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4146B6',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Welcome;
