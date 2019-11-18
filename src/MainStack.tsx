import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

export interface MainStackProps {
}
export interface MainStackState {
}

const RootStack = createStackNavigator(
    {
        HomeScreen,
        DetailScreen
    },
    {
        initialRouteName:'HomeScreen'
    }
)

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
