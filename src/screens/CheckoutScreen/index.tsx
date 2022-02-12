import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import { AppBar } from '@app/components';
import { Colors, Padding } from '@app/config/theme';
import { BodyLarge } from '@app/styles/typography';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/root-reducer';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const { cart } = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    console.log('cart====================================');
    console.log(cart);
    console.log('====================================cart');
  }, []);

  let subTotal = 0;
  let discount = 5;
  let shipping = 10;
  cart.forEach(item => {
    subTotal += item.price * item.quantity;
  });
  // let total = subTotal - discount + shipping;

  const PriceShow = ({ title, price }) => (
    <View style={styles.priceContainer}>
      <BodyLarge style={styles.priceTitle}>{title}</BodyLarge>
      <BodyLarge style={styles.priceShow}>{price}</BodyLarge>
    </View>
  );
  return (
    <View style={styles.container}>
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
        <PriceShow title="Shipping" price={`$${shipping}.00`} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: Padding.paddingHorizontal,
    backgroundColor: Colors.White,
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
});
export default CheckoutScreen;
