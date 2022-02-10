import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const OtpVerifyScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text>OtpVerifyScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerifyScreen;
