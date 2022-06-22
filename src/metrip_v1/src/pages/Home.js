import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Buscar from './Buscar';
import Comunidade from './Comunidade';
import MeusRegistros from './MeusRegistros';
import Inicial from './Inicial';
import Perfil from './Perfil';
import Cadastro2 from './Cadastro2';
import Cadastro3 from './Cadastro3';

import IconBuscar from '../assets/icons/IconBuscar';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'buscar', title: '', icon: 'magnify' },
    { key: 'comunidade', title: '', icon: 'home' },
    { key: 'meusregistros', title: '', icon: 'file-document' },
    { key: 'perfil', title: '', icon: 'account' },
    { key: 'inicial', title: '', icon: 'home' },
    { key: 'cadastro2', title: '', icon: 'home' },
    { key: 'cadastro3', title: '', icon: 'home' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    buscar: Buscar,
    comunidade: Comunidade,
    meusregistros: MeusRegistros,
    perfil: Perfil,
    inicial: Inicial,
    cadastro2: Cadastro2,
    cadastro3: Cadastro3,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
