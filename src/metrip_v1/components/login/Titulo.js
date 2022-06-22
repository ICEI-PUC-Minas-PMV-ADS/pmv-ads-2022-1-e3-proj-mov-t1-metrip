import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
const Titulo = () => {
  return ( 
    <View style={styles.container}>
    <Text style={styles.container}> CADASTRE-SE </Text>
</View>);
 
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A5FBFF',
    fontfamily: 'arial',
    fontSize: '30px',
    alignItems: 'center',
    padding: 20,
   
  },
});

export default Titulo;