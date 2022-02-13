import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AppBar, AppInput, CustomButton } from '@app/components';

import { Colors, Padding } from '@app/config/theme';
import { BodyLarge } from '@app/styles/typography';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { OtpVerifyScreenNavigationProps } from 'types';

const OtpVerifyScreen = ({ navigation }: OtpVerifyScreenNavigationProps) => {
  return (
    <View style={styles.container}>
      <AppBar onPress={() => navigation.goBack()} />
      <BodyLarge style={styles.title}>Verify</BodyLarge>
      <View style={styles.body}>
        <AppInput titleName="Enter OTP" />
        <CustomButton
          onPress={() => navigation.navigate('DrawerNavigator')}
          style={styles.buttonStyle}
          title="Verify"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding.paddingHorizontal,
    backgroundColor: Colors.White,
  },
  body: {
    width: '100%',
    alignItems: 'center',
    marginTop: hp(3),
  },
  title: {
    fontSize: RFValue(20),
    marginTop: hp(1.5),
  },
  buttonStyle: {
    marginTop: hp(8),
  },
});
export default OtpVerifyScreen;
