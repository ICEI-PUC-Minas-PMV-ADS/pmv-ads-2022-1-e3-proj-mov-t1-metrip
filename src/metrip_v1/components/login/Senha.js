import React from 'react';
import { TextInput, StyleSheet, Text,View } from 'react-native';
const Senha = () => {
  return (
  <View>
   <Text style={styles.container}> Senha </Text>
  </View>
 
  );
};
const styles = StyleSheet.create({
  container: {
 fontWeight:'bold',
 backgroundColor: '#F2F2F2',
 
  },
});

export default Senha;