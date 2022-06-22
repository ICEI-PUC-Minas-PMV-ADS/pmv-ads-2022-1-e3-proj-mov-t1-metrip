import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
const Componente3 = () => {
  return ( 
    
  <View>
  <Text style={styles.container}> Pronto! Agora e so acessar a sua conta: </Text>
  </View>);
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    padding: 20,
    fontSize: '15px',
    fontfamily: 'arial',
  },
});

export default Componente3;