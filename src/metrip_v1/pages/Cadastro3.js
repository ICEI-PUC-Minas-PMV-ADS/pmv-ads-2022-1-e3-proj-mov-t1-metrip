import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import Titulo from '../components/login/Titulo';
import Componente from '../components/login/Componente';
import Logo from '../components/login/Logo';
import Usuario from '../components/login/Senha';
import Email from '../components/login/Email';
import Botao2 from '../components/login/Botao2';
import Place from '../components/login/Place';
import Titulo2 from '../components/login/Titulo2';
import Componente3 from '../components/login/Componente3';

//import { useNavigation } from '@react-navigation/native';

const Cadastro3 = () => {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Titulo2 />
      <Logo />
      <Componente3 />
      <Botao2 />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A5FBFF',
  },
});

export default Cadastro3;