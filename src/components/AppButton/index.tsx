import React from 'react';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BodyMedium } from '@app/styles/typography';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@app/config/theme';
import { Shadow } from '@app/styles/Shadow';

interface AppButtonProp {
  title: string;
  textStyle?: any;
  style?: StyleProp<ViewStyle>;
  gradientStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
// LoginRegisterButton
const CustomButton: React.FC<AppButtonProp> = ({
  style,
  gradientStyle,
  onPress,
  textStyle,
  title = 'Buttton',
}) => {
  return (
    <View style={[styles.ButtonStyle, style, Shadow.shadow]}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0, 0.26, 0.51, 1]}
          colors={['#667EEA', '#658DF0', '#659BF5', '#64B6FF']}
          style={[styles.ButtonStyle, gradientStyle]}
        >
          <BodyMedium style={[styles.ButtonTextStyle, textStyle]}>
            {title}
          </BodyMedium>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    height: hp(6.5),
    width: wp(70),
    borderRadius: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  ButtonTextStyle: {
    color: Colors.White,
  },
});
export { CustomButton };
