import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil';

export interface IosTabProps {}
export interface IosTabState {}

export default class IosTab extends React.Component<IosTabProps, IosTabState> {
  constructor(props: IosTabProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>AndroidTab Component</Text>
        <TouchableOpacity
          onPress={() => {
            NavigatorUtil.goPage('DetailScreen', {});
          }}>
          <Text style={styles.tip}>show DetailPage</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
  tip: {
    fontSize: 30,
    marginTop: 10,
    color: 'skyblue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
