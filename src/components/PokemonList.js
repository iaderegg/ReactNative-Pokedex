import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import PokemonCard from "./PokemonCard";

export default function pokemonList(props) {

  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  },
});
