import React, { useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors, Padding } from '@app/theme';
import { TextInput } from 'react-native-paper';

interface AppInputProp {
  titleName?: string;
  style?: StyleProp<ViewStyle>;
}

const AppInput: React.FC<AppInputProp> = ({ titleName, style }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        label={titleName}
        style={[styles.textInput, style]}
        activeUnderlineColor={Colors.Grey}
        value={text}
        onChangeText={usertext => setText(usertext)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    minHeight: hp(7.2),
    width: '100%',
    borderRadius: hp(1.5),
    marginVertical: hp(1),
  },
  titleText: {
    fontFamily: 'Rubik-Regular',
  },
  textInput: {
    minHeight: hp(5),
    width: '100%',
    borderRadius: wp(2),
    backgroundColor: '#fff',
    paddingHorizontal: Padding.paddingHorizontal,
    marginVertical: hp(1),
  },
});

export { AppInput };
