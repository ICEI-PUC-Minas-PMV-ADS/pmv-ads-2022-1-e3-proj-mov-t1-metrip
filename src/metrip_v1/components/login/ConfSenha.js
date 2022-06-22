import React from 'react';
import { TextInput, StyleSheet, Text,View } from 'react-native';
const ConfSenha = () => {
  return (
  <View>
   <Text style={styles.container}> Confirme sua senha: </Text>
  </View>
 
  );
};
const styles = StyleSheet.create({
  container: {
 fontWeight:'bold',
 backgroundColor: '#F2F2F2',
 
  },
});

export default ConfSenha;