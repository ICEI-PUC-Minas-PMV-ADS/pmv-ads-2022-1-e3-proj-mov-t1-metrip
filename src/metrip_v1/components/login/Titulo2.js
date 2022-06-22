import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
const Titulo = () => {
  return ( 
    <View style={styles.container}>
    <Text style={styles.container}> CADASTRO CONCLUÍDO! </Text>
</View>);
 
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    fontfamily: 'arial',
    fontSize: '30px',
    alignItems: 'center',
    padding: 20,
   
  },
});

export default Titulo;