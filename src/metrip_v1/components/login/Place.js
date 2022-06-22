import React from 'react';
import { StyleSheet,TextInput,View } from 'react-native';
const Place = () => {
  return(
    <View>
    <TextInput style={styles.input} placeholder="" />
    </View>
  
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical:12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    
  },
});
export default Place;