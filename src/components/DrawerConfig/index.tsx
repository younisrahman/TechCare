import { Padding } from '@app/config/theme';
import { BodyMedium } from '@app/styles/typography';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
const image = require('../../assets/images/onboarding-Image.png');

const DrawerConfig = ({ props }) => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar barStyle="dark-content" />

      {/* Header And User Container */}
      <ImageBackground source={image} style={styles.CoverImage} />

      {/* NAvigaton items */}
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.navigationStyle}
          onPress={() => navigation.navigate(props.state.routeNames[0])}
        >
          <Entypo name="home" size={wp(8)} color="black" />
          <BodyMedium style={styles.titleTxt}>Home</BodyMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationStyle}
          onPress={() => navigation.navigate(props.state.routeNames[1])}
        >
          <Entypo name="shop" size={wp(8)} color="black" />

          <BodyMedium style={styles.titleTxt}>Checkout</BodyMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CoverImage: {
    height: hp(30),
    width: '100%',
  },
  body: {
    paddingHorizontal: Padding.paddingHorizontal,
  },
  navigationStyle: {
    flexDirection: 'row',
    height: hp(7),
    marginVertical: hp(1),
    alignItems: 'center',
  },
  titleTxt: {
    marginLeft: wp(5),
    marginTop: hp(1),
  },
});
export default DrawerConfig;
