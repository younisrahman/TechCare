import { View, ScrollView } from 'react-native';
import React from 'react';
import { BodyLarge } from '@app/styles/typography';
import { RootState } from '@app/store/root-reducer';
import { useSelector } from 'react-redux';
import { CategoryCard, ProductCard } from '@app/components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Padding } from '@app/config/theme';

const Header = () => {
  const { categories, products } = useSelector(
    (state: RootState) => state.products,
  );
  let Categories = [...categories];
  return (
    <View>
      <BodyLarge style={{ marginLeft: Padding.paddingHorizontal }}>
        Categories
      </BodyLarge>
      <ScrollView
        style={{ marginTop: hp(1.5), paddingVertical: hp(1) }}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {Categories?.reverse().map((category, index) => (
          <CategoryCard
            title={category}
            image={index.toString()}
            key={index}
            style={{
              marginRight: Padding.paddingHorizontal,
              marginLeft: index === 0 ? Padding.paddingHorizontal : 0,
            }}
          />
        ))}
      </ScrollView>
      <BodyLarge
        style={{ marginLeft: Padding.paddingHorizontal, marginTop: hp(2) }}
      >
        Featured
      </BodyLarge>
      <ScrollView
        style={{ marginTop: hp(1.5) }}
        horizontal
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {products?.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            style={{
              marginRight: wp(7),
              marginLeft: index === 0 ? Padding.paddingHorizontal : 0,
            }}
          />
        ))}
      </ScrollView>
      <BodyLarge
        style={{ marginLeft: Padding.paddingHorizontal, marginTop: hp(2) }}
      >
        Best Sell
      </BodyLarge>
    </View>
  );
};

export default Header;
