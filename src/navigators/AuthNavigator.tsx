import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  LoginScreen,
  VerificationScreen,
} from '../screens';
import OnbroadingScreen from '../screens/auth/OnbroadingScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [isExistingUser, setIsExistingUser] = useState(false);

  useEffect(() => {
    checkUserExisting();
  }, []);
  const checkUserExisting = async () => {
    const res = await AsyncStorage.getItem('auth');
    res && setIsExistingUser(true);
  };
  console.log('isExistingUser', isExistingUser);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isExistingUser && (
        <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen} />
      )}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
