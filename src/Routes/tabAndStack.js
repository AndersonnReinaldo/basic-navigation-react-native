import React from 'react';

//Importacao dos componetes do react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

const icons = {
  Home: {
    name: 'ios-home',
  },

  Sobre: {
    name: 'ios-people',
  },

  Contato: {
    name: 'ios-call',
  },
};
//Importacao das telas
import HomeTab from '../pages/Home/indexTab';
import SobreTab from '../pages/Sobre/indexTab';
import ContatoTab from '../pages/Contato/indexTab';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: '#121212',
          },
          null,
        ],
        tabBarIcon: ({color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Sobre" component={SobreTab} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Contato" component={ContatoTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
