import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NavigatorUtil from '../navigator/NavigatorUtil';

export interface AndroidTabProps {
}
export interface AndroidTabState {
}

export default class AndroidTab extends React.Component<AndroidTabProps, AndroidTabState> {
  constructor(props: AndroidTabProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>AndroidTab Component</Text>
         <TouchableOpacity onPress={() => {
          NavigatorUtil.goPage('DetailScreen', {});
         }}>
         <Text style={styles.tip}>show DetailPage</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
    },
    title:{
        fontSize:20,
        color:'#000000',
        textAlign:'center',
    },
    tip:{
        fontSize:30,
        marginTop:10,
        color:'blue',
        textAlign:'center',
        textDecorationLine:'underline'
    }
})
