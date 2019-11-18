import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface DetailScreenProps {
}
export interface DetailScreenState {
}

export default class DetailScreen extends React.Component<DetailScreenProps, DetailScreenState> {
  constructor(props: DetailScreenProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>DetailPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:40,
        color:'#000000',
    }
})
