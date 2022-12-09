import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import getColorByPokemonType from "../utils/getColorByPokemonType";


export default function PokemonCard(props) {
  const { pokemon } = props;

  const bgStyles = { backgroundColor: getColorByPokemonType(pokemon.type), ...styles.bgStyles };

  const goToPokemon = () => {
    console.log(`Go to the pokemon: ${pokemon.name} `);
  }

  return (
    <TouchableWithoutFeedback
      onPress={goToPokemon}
    >
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.order}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>
              {pokemon.name}
            </Text>
            <Image
              source={{ uri: pokemon.image }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  card: {
    flex: 1,
    height: 130,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    textTransform: "capitalize",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 1,
  },
  order: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#ffff",
    fontSize: 11,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
});
