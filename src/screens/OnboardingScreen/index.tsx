import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text>OnboardingScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
