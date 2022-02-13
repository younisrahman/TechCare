import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
export type ProductTypes = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity?: number;
  rating: { count: number; rate: number };
  title: string;
};

export type RootStackParamList = {
  OnboardingScreen: undefined;
  LoginScreen: undefined;
  OtpVerifyScreen: undefined;
  ProductDetails: { product: ProductTypes };
  DrawerNavigator: undefined;
};
export type DrawerNavigatorProps = {
  HomeScreen: undefined;
  CheckoutScreen: undefined;
};
export type ProductDetailsNavigationTypes = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;
  route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

export type OtpVerifyScreenNavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OtpVerifyScreen'>;
  route: RouteProp<RootStackParamList, 'OtpVerifyScreen'>;
};

export type OnboardingScreenNavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OnboardingScreen'>;
  route: RouteProp<RootStackParamList, 'OnboardingScreen'>;
};

export type LoginScreenNavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;
  route: RouteProp<RootStackParamList, 'LoginScreen'>;
};
