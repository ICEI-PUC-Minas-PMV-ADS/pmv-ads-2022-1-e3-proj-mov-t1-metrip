import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button, Card, Img} from 'react-native-paper';

const Login = () => {

        const [text, setText] = React.useState("");

  return(
  
    <View style={{ alignItems:'center', justifyContent:'center', flex: 1, backgroundColor: '#F2F2F2'}}>
    
      <Text style={{marginBottom: 20, fontSize: 32, color: '#B9B9B9'}}> ME TRIP </Text>    

    <Card style={{ width: '85%', marginBottom: 20}}>
      <Card.Cover source={{ uri: 'https://picsum.photos/750' }} />
    </Card>
  
    <TextInput style={{ width:'85%', justifyContent:'center', marginBottom: 20, backgroundColor: '#FFF'}}
      label="Usuário"
      value={text}
      onChangeText={text => setText(text)}
    />

    <TextInput style={{ width:'85%', justifyContent:'center', marginBottom: 15, backgroundColor: '#FFF'}}
      label="Senha"
      value={text}
      onChangeText={text => setText(text)}
    />
    <Text style={{ width: '85%', marginBottom: 25, color: '#B9B9B9', fontSize: 16}}>Esqueci a senha </Text>

    <Button mode="contained" onPress={() => console.log('Pressed')} style={{ width: '45%', height: '7%', marginBottom: 15, alignItems: 'center', justifyContent: 'center', color: '#FFF', backgroundColor: '#A7A7A7'}}>
      Entrar
    </Button>

    <Text style={{color: '#B9B9B9', fontSize: 16}}> Cadastre-se </Text>

    </View>
    
  );
}

export default Login;