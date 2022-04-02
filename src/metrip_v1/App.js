import React from 'react';
import {View, Text, StyleSheet, Constants} from 'react-native';

import Login from './src/pages/login'
import img from './src/pages/imagem-padrao.jpg'

const App= () => {

  return(
    <Login> </Login>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
