import React from 'react';
import { Button, StyleSheet,View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

const Header = ({title, goBack}) => {
  return (
    <View style={styles.create}>
    <Appbar.Header>
    </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
 create : {
    textAlign: 'center',
    color:'red',
    fontSize: 18,
  },
});
export default Header;