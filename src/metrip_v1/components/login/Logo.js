import React from 'react';
import { Image, StyleSheet } from 'react-native';
const Logo = () => {
  return (
    <Image style={styles.logo}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    backgroundColor: '#F2F2F2',
    alignSelf: "center",
  },
});
export default Logo;