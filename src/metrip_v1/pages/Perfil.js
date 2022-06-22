import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import TituloPagina from '../components/TituloPagina';

import IconMeusRegistros from '../assets/icons/IconMeusRegistros';

const Perfil = () => {
  return (
    <Container>
    <TituloPagina iconeDaPagina={<IconMeusRegistros />} nomePagina={'PERFIL'} />

      <Body>
        <Text>DADOS DA CONTA</Text>

        <Text>USO DO APLICATIVO</Text>

        <Button
          style={styles.botao}
          mode="outlined"
          color="green"
          uppercase="false"
          onPress={() => console.log('Pressed')}>
          Alterar Senha
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#FFF',
    margin: 80,
  },
});

export default Perfil;
