import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { AppBar, ProductCard } from '@app/components';
import { Colors, Padding } from '@app/config/theme';
import { getProducts, getCategory } from '@app/features/Product/reducer';
import { RootState } from '@app/store/root-reducer';
import Header from './Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);
  let Products = [...products];
  useEffect(() => {
    (async () => {
      await dispatch(getProducts());
      await dispatch(getCategory());
    })();
  }, []);

  const renderItem = ({ item }) => (
    <ProductCard product={item} style={{ marginHorizontal: wp(7) }} />
  );
  return (
    <View style={styles.container}>
      <AppBar
        isDrawed={true}
        onPress={() => navigation.openDrawer()}
        style={{ paddingHorizontal: Padding.paddingHorizontal }}
      />
      <FlatList
        ListHeaderComponent={Header}
        scrollEventThrottle={16}
        data={Products.reverse()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: hp(10) }}
      />
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
export default HomeScreen;
