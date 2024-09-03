import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Welcome from '../components/Welcome';
import { useAuth } from '../AuthContext';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { currentUser } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser ? (
          <Stack.Screen name="Welcome" component={Welcome} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;