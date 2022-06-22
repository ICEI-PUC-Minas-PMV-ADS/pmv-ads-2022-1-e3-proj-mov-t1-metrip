import React from 'react';
import {View,StyleSheet,TextInput,Button,Alert,SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import Titulo from '../components/login/Titulo';
import Componente from '../components/login/Componente';
import Logo from '../components/login/Logo';
import Nome from '../components/login/Nome';
import Email from '../components/login/Email';
import Botao from '../components/login/Botao';
import Place from '../components/login/Place';
import Cadastro2 from './Cadastro2';

import Container from '../components/Container';
import TituloPagina from '../components/TituloPagina';

import IconBuscar from '../assets/icons/IconBuscar';

//import {useNavigation} from '@react-navigation/native';
const Inicial = () => {
//const navigation = useNavigation();
  
  return (
<Container color={'#F2F2F2'}>
      <TituloPagina nomePagina={'CADASTRE-SE'} />
        <View>
      <Logo />
      <Componente />
      <Nome />
      <Place />
      <Email />
      <Place />
     <Button  color="black" title="Continuar" 
  //onPress={() => navigation.navigate('Cadastro2')}
  />
    </View>
    </Container>
  );
};

export default Inicial;