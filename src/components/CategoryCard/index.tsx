import { View, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from '@app/config/theme';
import { BodySmall } from '@app/styles/typography';

const IMAGE = {
  3: require('@app/assets/images/electronics.png'),
  2: require('@app/assets/images/jwelary.jpeg'),
  1: require('@app/assets/images/men.png'),
  0: require('@app/assets/images/women.png'),
};
const COLOR = {
  1: 'rgba(255,88,88,.65)',
  0: 'rgba(102,126,234,.7)',
  2: 'rgba(67,233,123,.7)',
  3: 'rgba(255,255,50,.7)',
};

interface CategoryCardProp {
  title?: string;
  image: string;
  style?: object;
  onPress?: () => void;
}
const CategoryCard: React.FC<CategoryCardProp> = ({ title, image, style }) => {
  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        imageStyle={{ borderRadius: wp(2) }}
        style={styles.Imagecontainer}
        source={IMAGE[image]}
      >
        <View
          style={[styles.colorcontainer, { backgroundColor: COLOR[image] }]}
        >
          <BodySmall style={{ color: Colors.White }}>{title}</BodySmall>
        </View>
        {/* <Text>{image}</Text> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: wp(2),
    height: hp(8),
    width: wp(30),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Imagecontainer: {
    height: hp(8),
    width: wp(30),
  },
  colorcontainer: {
    height: hp(8),
    width: wp(30),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryCard;
