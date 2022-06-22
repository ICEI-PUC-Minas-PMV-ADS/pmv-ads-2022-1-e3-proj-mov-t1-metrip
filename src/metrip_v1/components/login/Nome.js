import React from 'react';
import { TextInput, StyleSheet, Text,View } from 'react-native';
const Nome = () => {
  return (
  <View>
   <Text style={styles.container}> Nome </Text>
  </View>
 
  );
};
const styles = StyleSheet.create({
  container: {
 fontWeight:'bold',
 backgroundColor: '#F2F2F2',
 
  },
});

export default Nome;