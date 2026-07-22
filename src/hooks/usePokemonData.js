import { useEffect, useState } from "react";

const usePokemonData = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cantidadPokemon, setCantidadPokemon] = useState(5); // Estado para controlar la cantidad de Pokémon a cargar

    //funcion para obtener la url de la imagen del pokemon a partir de su url que nos da la API
    const getPokemonImage = (pokemonUrl) => {
        // obtenemos el id del pokemon a partir de la url que nos da la API
        const pokemonId = pokemonUrl.split("/").filter(Boolean).pop();
        // retornamos la url de la imagen del pokemon a partir de su id
        // podemos utilizar cualquiera de estas urls para obtener la imagen del pokemon, pero en este caso utilizaremos la url de la imagen oficial del pokemon
        // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
        // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    };

    //funcion para obtener el id del pokemon a partir de su url que nos da la API
    const getPokemonId = (pokemonUrl) => {
        return pokemonUrl.split("/").filter(Boolean).pop();
    };

    //funcion para obtener la descripcion del pokemon a partir de su id
    const getPokemonDescription = async (pokemonId) => {
        // usamos el endpoint de species porque ahi viene la descripcion corta del pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        const data = await response.json();

        // intentamos traer primero la descripcion en español y si no existe usamos ingles
        const flavorTextEntry =
            data.flavor_text_entries.find((entry) => entry.language.name === "es") ||
            data.flavor_text_entries.find((entry) => entry.language.name === "en");

        return flavorTextEntry
            ? flavorTextEntry.flavor_text.replace(/\f|\n|\r/g, " ").trim()
            : "Descripción no disponible.";
    };


    //funcion para obtener los datos de los pokemon desde la API
    const fetchPokemonData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantidadPokemon}`);
            const data = await response.json();

            /*
             Promise.all es un metodo de javascript que nos permite ejecutar 
             varias promesas en paralelo y esperar a que todas se resuelvan 
             antes de continuar con la ejecucion del codigo. 
             En este caso, estamos utilizando Promise.all 
             para obtener la descripcion de cada pokemon en paralelo, 
             ya que cada descripcion se obtiene a traves de una llamada a la API.
             De esta manera, podemos obtener todas las descripciones 
             de los pokemon de manera eficiente y rapida.
            */
            const pokemonWithDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const pokemonId = getPokemonId(pokemon.url);
                    const description = await getPokemonDescription(pokemonId);

                    return {
                        ...pokemon,
                        image: getPokemonImage(pokemon.url),
                        description,
                    };
                })
            );

            setPokemonData(pokemonWithDetails);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadMorePokemon = () => {
        setLoading(true); // Establecemos el estado de carga en true mientras obtenemos los datos
        setCantidadPokemon((prevCantidad) => prevCantidad + 5);
    };
  

    useEffect(() => {
        fetchPokemonData();
    }, [cantidadPokemon]);

    return { pokemonData, loading, loadMorePokemon};
};

export default usePokemonData;