import React from 'react';

//Importacao dos componetes do react-navigation
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Importacao das telas
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title:'Inicio',
          headerStyle:{
            backgroundColor:'#121212'
          },
          headerTintColor:'#fff',
          headerShown:false,
        }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
