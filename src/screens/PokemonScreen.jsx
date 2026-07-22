import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// importamos los componentes PokemonCard y CustomButton
// que se utilizaran para crear la pantalla de pokemon
import PokemonCard from "../components/PokemonCard";
import CustomButton from "../components/CustomButton";

//importamos el hook usePokemonData para obtener los datos de los Pokémon
import usePokemonData from "../hooks/usePokemonData";

const PokemonScreen = () => {
  // utilizamos el hook usePokemonData para obtener los datos de los Pokémon
  // y el estado de carga de los datos para mostrar un indicador de carga mientras se obtienen los datos
  const { pokemonData, loading, loadMorePokemon } = usePokemonData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon</Text>
      <Text style={styles.text}>
        En esta pantalla cargaremos información de los Pokémon, esta información
        se obtendrá de la API de Pokémon, la cual nos permitirá obtener datos
        como el nombre, tipo, habilidades y estadísticas de cada Pokémon.
        Inicialmente se mostrarán solamente 25 pokemon, pero se implementará un
        botón para cargar más Pokémon a medida que el usuario lo desee.
      </Text>
      {loading ? (
        <Text style={styles.loadingText}>Cargando Pokémon...</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </ScrollView>
      )}
      <CustomButton
        title="Al dar click en este botón se cargarán 5 Pokémon más"
        onPress={() => {
          loadMorePokemon();
        }}
      />
    </View>
  );
};
export default PokemonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});