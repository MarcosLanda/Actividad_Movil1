import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PokemonCard = ({ pokemon }) => {
  //Obtener el número del Pokémon a partir de su URL
  const pokemonNumber = pokemon.url.split("/").filter(Boolean).pop();

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
      <Text style={styles.number}>#{pokemonNumber}</Text>
      <Text style={styles.title}>{pokemon.name}</Text>
      <Text style={styles.text}>{pokemon.description}</Text>
    </View>
  );
};
export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  number: {
    fontSize: 14,
    fontWeight: "600",
    color: "#888",
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});