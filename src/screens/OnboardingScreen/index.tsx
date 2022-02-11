import { Colors } from '@app/config/theme';
import { BodyLarge } from '@app/styles/typography';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { CustomButton } from '@app/components';
import { View, StyleSheet, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <BodyLarge style={{ color: Colors.Grey1 }}>Welcome to Bolt</BodyLarge>
      <Image
        source={require('@app/assets/images/onboarding-Image.png')}
        style={styles.imageStyle}
      />
      <View style={styles.bottomContainer}>
        <CustomButton
          onPress={() => navigation.navigate('LoginScreen')}
          style={[styles.buttonStyle]}
          title="Login With Phone"
        />
        <BodyLarge style={{ color: Colors.Grey1, marginTop: hp(3) }}>
          Shop With us
        </BodyLarge>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: 'center',
    paddingVertical: hp(5),
  },
  imageStyle: {
    marginTop: hp(16),
  },
  buttonStyle: {
    height: hp(6.5),
    width: wp(70),
    borderRadius: hp(1),
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: hp(12),
  },
});

export default OnboardingScreen;
