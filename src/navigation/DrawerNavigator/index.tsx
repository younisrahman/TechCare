import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, CheckoutScreen } from '@app/screens';
import { DrawerConfig } from '@app/components';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
      drawerContent={props => <DrawerConfig props={props} />}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Drawer.Navigator>
  );
}
