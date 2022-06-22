import React, {useEffect, useState} from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import { List, Text} from 'react-native-paper';
import Container from '../components/Container';
import BodyRegistroDeViagem from '../components/BodyRegistroDeViagem';

import TituloPagina from '../components/TituloPagina';
import TituloRegistro from '../components/TituloRegistro';
import CardRegistro from '../components/CardRegistro';
import IconMeusRegistros from '../assets/icons/IconMeusRegistros';

import FAB from '../components/FAB';
import IconBotaoNovoRegistro from '../assets/icons/IconBotaoNovoRegistro';

//import {useNavigation, useIsFocused} from '@react-navigation/native';

const MeusRegistros = () => {

  //const navigation = useNavigation();

  const renderItems = ({ item }) => {
      
      return (
        <CardRegistro local={item.nomeCidade + ", " + item.uf + " - " + item.nomePais}
        data={item.periodoViagem}
        usuarioResponsavel = {"por @" + item.usuarioResponsavel}
        //onPress={() =>  navigation.navigate('RegistroDeViagem', {item})}
        />    
      );         
};

  const renderItem = ({ item }) => {

    return (
        <List.Item

        item={item}

        title= {item.nomeCidade +", "+ item.uf + " - "+ item.nomePais}

        description={item.data}

        left={(props) => <List.Icon {...props} icon="airplane" />}

        //onPress={() => navigation.navigate('RegistroDeViagem', {item})}

      />
    );

  };

  return (
    <Container color={'#F2F2F2'}>      
    
      <TituloPagina 
        iconeDaPagina={<IconMeusRegistros/>} 
        nomePagina ={'MEUS REGISTROS'}/>

      <FlatList
            data={DATA}
            renderItem={renderItems}
            keyExtractor={item => item.id}
          />
    
    <FAB iconFab={<IconBotaoNovoRegistro/>} onPress={() => navigation.navigate('RegistroDeViagem')} />
      
    </Container>
  );
};

//const styles = StyleSheet.create({
 // fab: {
   // position: 'absolute',
    //margin: 16,
   // right: 0,
   // bottom: 0,
 // }   
//});

const DATA = [
  {
    id: 1 , 
    nomePais: 'BRASIL', 
    uf: 'MG',
    nomeCidade: 'Belo Horizonte',
    periodoViagem: 'Mar, 2022',
    informacoesAdicionais: '',
    usuarioResponsavel: 'mirella_batista',
    hospedagem: [
      {
        idHospedagem: 1,
        classificacao: 5,
        nomeEstabelecimento: 'Hotel Del Vale, Santa Lucia',
        periodo: '15 dias',
        valorDiaria: 130.00,
      },
      {
        idHospedagem: 2,
        classificacao: 3,
        nomeEstabelecimento: 'Hotel Maria de Jesus, São João',
        periodo: '5 dias',
        valorDiaria: 100.00,
      }
    ],
    turismo: [
      {
        idTurismo: 1,
        classificacao: 4,
        nomeLocal: 'Praça Sete de Setembro',
        valorTurismo: 0   
      }
    ],
    alimentacao: [
      {
        idAlimentacao: 1,
        classificacao: 3,
        nomeLocal:'Hamburgueria Danadinha',
        tipoAlimentacao: 'Fast Food',
        custoMedio: 40.00
      },
      {
        idAlimentacao: 2,
        classificacao: 5,
        nomeLocal:'Pizzaria Cê é Loko',
        tipoAlimentacao: 'Pizzaria',
        custoMedio: 60.00
      }
    ],
    transporte: [
      {
        
      }
    ]
  },
  {
    id: 2 , 
    nomePais: 'EUA', 
    uf: 'CA',
    nomeCidade: 'San Luis Obispo',
    periodoViagem: 'Fev, 2022',
    informacoesAdicionais: '',
    usuarioResponsavel: 'joana_darc',
    hospedagem: [
      {
        idHospedagem: 1,
        classificacao: 5,
        nomeEstabelecimento: 'Hotel Del Vale, Santa Lucia',
        periodo: '15 dias',
        valorDiaria: 130.00,
      },
      {
        idHospedagem: 2,
        classificacao: 3,
        nomeEstabelecimento: 'Hotel Maria de Jesus, São João',
        periodo: '5 dias',
        valorDiaria: 100.00,
      }
    ],
    turismo: [
      {
        idTurismo: 1,
        classificacao: 4,
        nomeLocal: 'Praça Sete de Setembro',
        valorTurismo: 0   
      }
    ],
    alimentacao: [
      {
        idAlimentacao: 1,
        classificacao: 3,
        nomeLocal:'Hamburgueria Danadinha',
        tipoAlimentacao: 'Fast Food',
        custoMedio: 40.00
      },
      {
        idAlimentacao: 2,
        classificacao: 5,
        nomeLocal:'Pizzaria Cê é Loko',
        tipoAlimentacao: 'Pizzaria',
        custoMedio: 60.00
      }
    ],
    transporte: [
      {
        
      }
    ]
  },
  {
    id: 3 , 
    nomePais: 'EUA', 
    uf: 'HI',
    nomeCidade: 'Volcanoes National Park',
    periodoViagem: 'Dez, 2021',
    informacoesAdicionais: '',
    usuarioResponsavel: 'maria_mole',
    hospedagem: [
      {
        idHospedagem: 1,
        classificacao: 5,
        nomeEstabelecimento: 'Hotel Del Vale, Santa Lucia',
        periodo: '15 dias',
        valorDiaria: 130.00,
      },
      {
        idHospedagem: 2,
        classificacao: 3,
        nomeEstabelecimento: 'Hotel Maria de Jesus, São João',
        periodo: '5 dias',
        valorDiaria: 100.00,
      }
    ],
    turismo: [
      {
        idTurismo: 1,
        classificacao: 4,
        nomeLocal: 'Praça Sete de Setembro',
        valorTurismo: 0   
      }
    ],
    alimentacao: [
      {
        idAlimentacao: 1,
        classificacao: 3,
        nomeLocal:'Hamburgueria Danadinha',
        tipoAlimentacao: 'Fast Food',
        custoMedio: 40.00
      },
      {
        idAlimentacao: 2,
        classificacao: 5,
        nomeLocal:'Pizzaria Cê é Loko',
        tipoAlimentacao: 'Pizzaria',
        custoMedio: 60.00
      }
    ],
    transporte: [
      {
        
      }
    ]
  },
  {
    id: 4 , 
    nomePais: 'BELIZE', 
    uf: 'AZ',
    nomeCidade: 'Placencia',
    periodoViagem: 'Fev, 2022',
    informacoesAdicionais: '',
    usuarioResponsavel: 'joao_gomes',
    hospedagem: [
      {
        idHospedagem: 1,
        classificacao: 5,
        nomeEstabelecimento: 'Hotel Del Vale, Santa Lucia',
        periodo: '15 dias',
        valorDiaria: 130.00,
      },
      {
        idHospedagem: 2,
        classificacao: 3,
        nomeEstabelecimento: 'Hotel Maria de Jesus, São João',
        periodo: '5 dias',
        valorDiaria: 100.00,
      }
    ],
    turismo: [
      {
        idTurismo: 1,
        classificacao: 4,
        nomeLocal: 'Praça Sete de Setembro',
        valorTurismo: 0   
      }
    ],
    alimentacao: [
      {
        idAlimentacao: 1,
        classificacao: 3,
        nomeLocal:'Hamburgueria Danadinha',
        tipoAlimentacao: 'Fast Food',
        custoMedio: 40.00
      },
      {
        idAlimentacao: 2,
        classificacao: 5,
        nomeLocal:'Pizzaria Cê é Loko',
        tipoAlimentacao: 'Pizzaria',
        custoMedio: 60.00
      }
    ],
    transporte: [
      {
        
      }
    ]
  },
];

export default MeusRegistros;