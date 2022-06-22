import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconPlus from '../assets/icons/IconPlus';

const FAB = ({ iconFab }) => {
  return <View style={styles.fab}> {iconFab}</View>;
};

const styles = StyleSheet.create({
  fab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: 40,
    height: 40,
    shadowColor: '#444444',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    position: 'fixed',
    alignSelf: 'flex-end',
    marginRight: 12,
    marginTop: 12,
    cursor: 'pointer',
  },
});

export default FAB;
