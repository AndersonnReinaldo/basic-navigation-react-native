import React from 'react';

//Importacao dos componetes do react-navigation
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Abri o Drawer ao chamar essa funcao ou fecha dependendo do status que ele se encontra
// () => navigation.toggleDrawer() 
// options={{headerShown: false}} -> retira header default do navigation

//Importacao das telas
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import CustomDrawer from '../components/customDrawer';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator
        drawerContent={CustomDrawer}
        >
            <Drawer.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Drawer.Screen name='Sobre' component={Sobre}/>
            <Drawer.Screen name='Contato' component={Contato}/>
        </Drawer.Navigator>
   
    </NavigationContainer>
  );
};

export default App;
