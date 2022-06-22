import React from 'react';
import { StyleSheet, View } from 'react-native';

const BodyRegistroDeViagem = ({ children }) => {
  return <View style={styles.body}> {children}</View>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 0,
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
});

export default BodyRegistroDeViagem;
