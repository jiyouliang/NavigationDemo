import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigatorUtil from '../navigator/NavigatorUtil';
import {NavigationStackScreenOptions} from 'react-navigation-stack/src/types';
import {NavigationScreenProps} from 'react-navigation';
import AndroidTab from '../tabs/AndroidTab';
import IosTab from '../tabs/IosTab';

export interface HomeScreenProps {
  navigation: any;
}
export interface HomeScreenState {}

/**
 * HomePage
 *
 * @export
 * @class HomeScreen
 * @extends {React.Component<HomeScreenProps, HomeScreenState>}
 */
export default class HomeScreen extends React.Component<
  HomeScreenProps,
  HomeScreenState
> {
  static navigationOptions = {
    tabBarOptions: {
      upperCaseLabel: false,
    },
    header: null,
  };
  constructor(props: HomeScreenProps) {
    super(props);
  }

  private showPage = () => {
    NavigatorUtil.goPage('DetailScreen', {});
  };

  /**
   * init the Tab by call createMaterialTopTabNavigator
   *
   * @private
   * @memberof HomeScreen
   */
  private initTab = () => {
    return createAppContainer(
      createMaterialTopTabNavigator({
        AndroidTab: {
          screen: AndroidTab,
          navigationOptions: {
            title: 'Android',
          },
        },
        IosTab: {
          screen: IosTab,
          navigationOptions: {
            title: 'IOS',
          },
        },
      }),
    );
  };

  public componentDidMount() {
    console.disableYellowBox = true;
  }

  public render() {
    // Important:init NavigationUtil navigation object
    NavigatorUtil.navigation = this.props.navigation;
    const TopTab = this.initTab();
    return (
      <View style={styles.container}>
        <View style={styles.imageBackground}>
          <Image style={styles.logo} source={require('../images/logo.png')} />
        </View>
        <TouchableOpacity onPress={this.showPage}>
          <Text style={styles.headerTitle}>click to show DetailPage</Text>
        </TouchableOpacity>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <TopTab />
        </View>
      </View>
    );
  }
}

// export const AppContainer = createAppContainer(createMaterialTopTabNavigator());

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F3F3F3',
  },
  imageBackground: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    height: 150,
  },
  headerTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#000000',
    textDecorationLine: 'underline',
  },
});
