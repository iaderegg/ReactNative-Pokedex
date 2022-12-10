import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../src/api/pokemon';
import PokemonList from '../src/components/PokemonList';

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setnextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setnextUrl(response.next);

      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        hasNext={nextUrl}
      />
    </SafeAreaView>
  );
}