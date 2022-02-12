import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { AppBar, CustomButton } from '@app/components';
import { Colors, Padding } from '@app/config/theme';
import { BodyLarge, BodySmall } from '@app/styles/typography';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/root-reducer';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const { cart } = useSelector((state: RootState) => state.cart);
  const [countdownKey, setCountdownKey] = useState(0);

  let counter = 20;
  let subTotal = 0;
  cart.forEach(item => {
    subTotal += item.price * item.quantity;
  });
  let discount = subTotal === 0 ? 0 : 5;
  let shipping = subTotal === 0 ? 0 : 10;
  let total = subTotal - (subTotal / 100) * discount + shipping;

  const PriceShow = ({ title, price }) => (
    <View style={styles.priceContainer}>
      <BodyLarge style={styles.priceTitle}>{title}</BodyLarge>
      <BodyLarge style={styles.priceShow}>{price}</BodyLarge>
    </View>
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCountdownKey(Math.random());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <CountdownCircleTimer
          key={countdownKey}
          isPlaying
          onComplete={() => {
            navigation.goBack();
          }}
          duration={counter}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          size={hp(5)}
          strokeWidth={hp(0.5)}
          trailStrokeWidth={hp(0.5)}
        >
          {({ remainingTime }) => (
            <BodySmall style={{ fontSize: RFValue(15) }}>
              {remainingTime}
            </BodySmall>
          )}
        </CountdownCircleTimer>
      </View>
      <AppBar
        style={{ marginHorizontal: Padding.paddingHorizontal }}
        onPress={() => navigation.goBack()}
      />
      <BodyLarge style={styles.title}>Check out</BodyLarge>
      <ScrollView
        style={styles.body}
        contentContainerStyle={{ paddingBottom: hp(10) }}
      >
        {cart.map((item, index) => (
          <CartCard key={index} product={item} />
        ))}
        <BodyLarge style={{ padding: Padding.paddingHorizontal }}>
          Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9
        </BodyLarge>
        <View style={styles.HorizontalLine} />
        <PriceShow title="Subtotal" price={`$${subTotal.toFixed(2)}.00`} />
        <PriceShow title="Discount" price={`${discount}%`} />
        <PriceShow title="Shipping" price={`$${shipping}.00`} />
        <View style={[styles.HorizontalLine, { marginVertical: hp(2) }]} />
        <PriceShow title="Total" price={`$${total.toFixed(2)}.00`} />
        <CustomButton
          style={[styles.backButton, { marginTop: hp(6) }]}
          gradientStyle={styles.backButton}
          onPress={() => navigation.goBack()}
          title="Back to Home"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  counterContainer: {
    position: 'absolute',
    right: Padding.paddingHorizontal,
    top: hp(1),
  },
  body: {
    width: '100%',
    marginTop: hp(3),
  },
  title: {
    fontSize: RFValue(20),
    marginTop: hp(1.5),
    marginHorizontal: Padding.paddingHorizontal,
  },
  buttonStyle: {
    marginTop: hp(8),
  },
  HorizontalLine: {
    borderBottomColor: Colors.Grey,
    borderBottomWidth: 1,
    width: wp(91),
    marginHorizontal: Padding.paddingHorizontal,
    marginBottom: hp(3),
  },
  priceContainer: {
    height: hp(3),
    width: wp(91),
    marginHorizontal: Padding.paddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(0.7),
  },
  priceTitle: {
    color: Colors.Grey1,
  },
  priceShow: {},
  backButton: {
    width: wp(80),
    marginHorizontal: wp(10),
  },
});
export default CheckoutScreen;
