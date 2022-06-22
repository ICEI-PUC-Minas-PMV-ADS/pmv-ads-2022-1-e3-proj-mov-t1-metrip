import React from 'react';
import { Button, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Botao = () => {
const navigation = useNavigation();
  return <Button  color="black" title="Continuar" 
  onPress={() => navigation.navigate('')} />
};
const styles = StyleSheet.create({});
export default Botao;