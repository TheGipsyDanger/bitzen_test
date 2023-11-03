import {NavigationProp, RouteProp} from '@react-navigation/native';

export enum AppRoutes {
  Test = 'Test',
  AuthNavigator = 'AuthNavigator',
  MainNavigator = 'MainNavigator',
  ProfileNavigator = 'ProfileNavigator',
  Auth = 'Auth',
  InputPassword = 'InputPassword',
  Register = 'Register',
  ResetPassword = 'ResetPassword',
  ResetPasswordConfirmation = 'ResetPasswordConfirmation',
  Home = 'Home',
  RegisterPet = 'RegisterPet',
  MyInfos = 'MyInfos',
  Profile = 'Profile',
}

export type RootParamList = {
  [AppRoutes.Test]: undefined;
  [AppRoutes.AuthNavigator]: undefined;
  [AppRoutes.MainNavigator]: undefined;
  [AppRoutes.ProfileNavigator]: undefined;
  [AppRoutes.Auth]: undefined;
  [AppRoutes.InputPassword]: undefined;
  [AppRoutes.Register]: undefined;
  [AppRoutes.ResetPassword]: undefined;
  [AppRoutes.ResetPasswordConfirmation]: undefined;
  [AppRoutes.Home]: undefined;
  [AppRoutes.RegisterPet]: undefined;
  [AppRoutes.MyInfos]: undefined;
  [AppRoutes.Profile]: undefined;
};

export const AppRouteNames = Object.keys(
  AppRoutes
) as unknown as keyof typeof AppRoutes as keyof RootParamList;

export type IAppRouteNames = typeof AppRouteNames;

export type INavigate = NavigationProp<IAppRouteNames>;
export type IRoute = RouteProp<IAppRouteNames>;
