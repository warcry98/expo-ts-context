import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screens/SignIn';
import Dashboard from './src/screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { SnackBarProvider } from './src/contexts/snack';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

export default function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <SnackBarProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SnackBarProvider>
    </NavigationContainer>
  );
}
