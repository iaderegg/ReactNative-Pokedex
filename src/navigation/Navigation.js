import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from '../../screens/Favorites';
import PokedexScreen from '../../screens/Pokedex';
import AccountScreen from '../../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}