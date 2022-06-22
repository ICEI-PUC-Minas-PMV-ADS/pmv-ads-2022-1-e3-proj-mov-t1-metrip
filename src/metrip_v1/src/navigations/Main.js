import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Inicial from  '../pages/Inicial';
import Cadastro2 from  '../pages/Cadastro2';
import Cadastro3 from '../pages/Cadastro3';

const Stack = createNativeStackNavigator();
const Main = () => {
  return(
        <Stack.Navigator initialRouteName="Inicial">
      
        <Stack.Screen name="Inicial" component={Inicial}
        options={{Header:() => null}} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} 
        options={{Header:() => null}}  />
      <Stack.Screen name="Cadastro3" component={Cadastro3} 
        />
        
      </Stack.Navigator>
    
  );
}
export default Main;