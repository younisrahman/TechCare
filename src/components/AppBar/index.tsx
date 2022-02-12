import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from '@app/config/theme';

interface AppBarProp {
  isDrawed?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const AppBar: React.FC<AppBarProp> = ({ isDrawed = false, onPress, style }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {isDrawed ? (
          <Image source={require('@app/assets/images/Drawer.png')} />
        ) : (
          <Image
            style={{ tintColor: Colors.Grey1 }}
            source={require('@app/assets/images/ArrowBack.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(8),
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    width: wp(15),
    height: hp(7),
    justifyContent: 'center',
  },
});

export default AppBar;
