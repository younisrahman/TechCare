import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Rating } from 'react-native-ratings';
import { AppBar, CustomButton } from '@app/components';
import { Colors, Padding } from '@app/config/theme';
import { BodyLarge, BodyMedium } from '@app/styles/typography';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch } from 'react-redux';
import { addtoCart } from '@app/features/Cart/reducer';

import { ProductDetailsNavigationTypes } from 'types';

const ProductDetails = ({
  navigation,
  route: {
    params: { product },
  },
}: ProductDetailsNavigationTypes) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <AppBar onPress={() => navigation.goBack()} />
      <BodyLarge style={styles.title}>{product.title}</BodyLarge>
      <BodyLarge style={styles.title}>
        {'$'}
        {product.price}
      </BodyLarge>
      <ScrollView
        contentContainerStyle={styles.Containbody}
        style={styles.body}
      >
        <Image style={styles.imageStyle} source={{ uri: product.image }} />
        <View style={{ marginTop: hp(1.5), flexDirection: 'row' }}>
          <Rating
            showRating={false}
            ratingCount={5}
            imageSize={RFValue(15)}
            startingValue={product.rating.rate}
            readonly
          />
          <BodyMedium style={{ marginLeft: wp(2) }}>
            {product.rating.rate}
          </BodyMedium>
        </View>
        <View>
          <BodyMedium style={{ marginTop: hp(2) }}>
            Category: {product.category}
          </BodyMedium>
          <BodyMedium style={{ marginTop: hp(2) }}>
            {product.description}
          </BodyMedium>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CustomButton
          style={styles.buttonStyle}
          gradientStyle={styles.buttonStyle}
          title="Back"
          onPress={() => navigation.goBack()}
        />
        <CustomButton
          style={styles.buttonStyle}
          gradientStyle={styles.buttonStyle}
          title="Add to Cart"
          onPress={() => {
            dispatch(addtoCart({ ...product, quantity: 1 }));
            navigation.navigate('CheckoutScreen');
          }}
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
  title: {
    fontSize: RFValue(20),
    marginTop: hp(0.5),
  },
  body: {
    paddingTop: hp(3),
  },
  Containbody: {
    alignItems: 'center',
    paddingBottom: hp(15),
  },
  imageStyle: {
    height: hp(50),
    width: '100%',
    resizeMode: 'contain',
  },

  footer: {
    flexDirection: 'row',
    width: wp(100),
    paddingHorizontal: Padding.paddingHorizontal,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: hp(1),
  },
  buttonStyle: {
    height: hp(5),
    width: wp(42),
  },
});
export default ProductDetails;
