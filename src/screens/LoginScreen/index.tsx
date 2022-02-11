import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '@app/components/AppBar';
import { Colors, Padding } from '@app/config/theme';
import { BodyLarge } from '@app/styles/typography';
import { RFValue } from 'react-native-responsive-fontsize';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppBar onPress={() => navigation.goBack()} />
      <BodyLarge style={{ fontSize: RFValue(20) }}>Login</BodyLarge>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding.paddingHorizontal,
    backgroundColor: Colors.White,
  },
});
export default LoginScreen;
