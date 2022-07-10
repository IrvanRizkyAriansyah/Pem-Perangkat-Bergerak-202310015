import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { Component } from 'react';

export default class Apl extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.images}
        source={ require ('./image/foto.jpg')} />
          <Text> Irvan Rizky Ariansyah </Text>
          <Text> 202310015 </Text>
          <Text> TI 20 PA 1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1, justifyContent: 'center', alignItems: 'center'
  },
  images: {
    width: 200,
    height: 300,
    backgroundColor: 'black',
  },
});
