import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, CheckoutScreen } from '@app/screens';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Drawer.Navigator>
  );
}
