import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import PokemonCard from "./PokemonCard";

export default function pokemonList(props) {

  const { pokemons, loadPokemons, hasNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={hasNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        hasNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
