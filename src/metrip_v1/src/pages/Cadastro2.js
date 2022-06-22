import React from 'react';
import {View,StyleSheet,TextInput,Button,Alert,SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import Titulo from '../components/login/Titulo';
import Componente2 from '../components/login/Componente2';
import Logo from '../components/login/Logo';
import Senha from '../components/login/Senha';
import ConfSenha from '../components/login/ConfSenha';
import Botao from '../components/login/Botao';
import Place from '../components/login/Place';
import Cadastro3 from './Cadastro3';
import Container from '../components/Container';
import TituloPagina from '../components/TituloPagina';

import IconBuscar from '../assets/icons/IconBuscar';

//import {useNavigation} from '@react-navigation/native';

const Cadastro2 = () => {
//const navigation = useNavigation();

  return (
    <Container color={'#F2F2F2'}>
      <TituloPagina nomePagina={'CADASTRE-SE'} />
    <View style={styles.container}>
      <Logo />
      <Componente2 />
      <Senha  />
      <Place />
      <ConfSenha />
      <Place />
         <Button  color="black" title="Continuar" 
  //onPress={() => navigation.navigate('Cadastro3')}
  />
    </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
  },
});
export default Cadastro2;