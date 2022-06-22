import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
const Componente2 = () => {
  return ( 
    
  <View>
  <Text style={styles.container}> Otimo! Agora , vamos criar uma senha: </Text>
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

export default Componente2;