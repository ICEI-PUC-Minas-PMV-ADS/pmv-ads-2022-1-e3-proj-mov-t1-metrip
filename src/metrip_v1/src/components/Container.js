import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ children, color }) => {
  return <View style={{backgroundColor: color,  padding: 10}}>
  {children}
  </View>;
};

export default Container;