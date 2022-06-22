import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
const Lancamento = () => {
  return ( 
    
  <View>
  <Text style={styles.container}> Nos conte um pouco sobre você: </Text>
  </View>);
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    fontSize: '16px',
    fontfamily: 'arial',
  },
});

export default Lancamento;