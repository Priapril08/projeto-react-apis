import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokedexList, setPokedexList] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    console.log(pokemon);
    setPokedexList([...pokedexList, pokemon]);
    const newListPokemons = listaPokemons.filter(
      (pokemonItem) => pokemon.name != pokemonItem.name
    );
    setListaPokemons(newListPokemons);
  };
  const removePokemon = (name) => {
    const newPokedexList = pokedexList.filter(
      (pokemonItem) => name != pokemonItem.name
    );

    setPokedexList(newPokedexList);
  };

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setListaPokemons(response.data.results);
    });
  }, []);
  return (
    <PokemonContext.Provider
      value={{ listaPokemons, addPokemon, pokedexList, removePokemon }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
