import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AppContainer from './MainStack';

export interface AppProps {}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return <AppContainer />;
  }
}
