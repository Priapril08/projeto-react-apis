import React, { useContext } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { ListPageContainer } from "./PokemonListStyles";
import { PokemonContext } from "../../Context/PokemonContext";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const PokemonList = () => {
  const { listaPokemons, pokedexList } = useContext(PokemonContext);
  const location = useLocation();
  console.log(location);
  const isHomePage = location.pathname == "/";
  const pageList = useMemo(
    () => (isHomePage ? listaPokemons : pokedexList),
    [listaPokemons, pokedexList]
  );

  console.log(pageList, listaPokemons);
  return (
    <ListPageContainer>
      <div className="pokemon-container">
        <div className="todos-pokemons">
          {isHomePage ? <>Todos Pokémons</> : <>Meus Pokémons</>}
        </div>
        <div className="grid">
          {pageList.map((pokemon, index) => {
            console.log(pokemon);
            return (
              <div key={"pokemon-" + index}>
                <PokemonCard pokemon={pokemon} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </ListPageContainer>
  );
};
