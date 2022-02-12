export type ProductTypes = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity?: number;
  rating: { count: number, rate: number };
  title: string;
};

export type RootStackParamList = {
  Root: undefined;
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  MovieDetailsScreen: undefined;
};
export type BottomTabParamList = {
  HomeTab: undefined;
  LatestTab: undefined;
};

export type HomeTabParamList = {
  HomeScreen: undefined;
};

export type LatestTabParamList = {
  LatestScreen: undefined;
};

