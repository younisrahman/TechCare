import { Colors, Padding } from '@app/config/theme';
import { Shadow } from '@app/styles/Shadow';
import { BodyMedium, BodySmall } from '@app/styles/typography';
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { addtoCart, removefromCart } from '@app/features/Cart/reducer';

import { ProductTypes } from '../../../types';
interface CartCardProps {
  product: ProductTypes;
}

const CartCard: React.FC<CartCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, Shadow.shadow]}>
      <Image source={{ uri: product.image }} style={styles.imageStyle} />
      <View style={styles.body}>
        <BodyMedium numberOfLines={3}>{product.title}</BodyMedium>
        <BodySmall style={{ color: Colors.Grey1 }}>
          {product.category}
        </BodySmall>
        <BodyMedium style={{ color: Colors.PriceText }}>
          {'$'}
          {product.price}
        </BodyMedium>
        <View style={styles.cartControl}>
          <TouchableOpacity
            onPress={() => dispatch(removefromCart(product))}
            style={styles.cartButton}
          >
            <BodyMedium>-</BodyMedium>
          </TouchableOpacity>
          <BodyMedium>{product.quantity}</BodyMedium>
          <TouchableOpacity
            onPress={() => dispatch(addtoCart(product))}
            style={styles.cartButton}
          >
            <BodyMedium>+</BodyMedium>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(18),
    width: wp(91),
    backgroundColor: Colors.White,
    flexDirection: 'row',
    marginTop: hp(2),
    marginHorizontal: Padding.paddingHorizontal,
    borderColor: Colors.LightGrey,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageStyle: {
    height: hp(17),
    width: hp(17),
    resizeMode: 'contain',
  },
  body: {
    width: wp(55),
    height: '100%',
    paddingVertical: hp(1),
  },
  cartControl: {
    backgroundColor: Colors.Grey4,
    position: 'absolute',
    bottom: hp(1),
    height: hp(4),
    width: wp(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartButton: {
    height: hp(4),
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CartCard;
