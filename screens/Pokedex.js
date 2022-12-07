import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { getPokemonsApi } from '../src/api/pokemon';

export default function Pokedex() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}