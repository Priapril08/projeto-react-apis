import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CardContainer } from "./PokemonCardStyles";
import pokeball from "../../Assets/pngwing.png";
import images from "../../Assets/types";
import { PokemonContext } from "../../Context/PokemonContext";
import { useLocation } from "react-router-dom";

export const PokemonCard = (props) => {
  const { addPokemon, removePokemon } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState({});
  const location = useLocation();
  const isHomePage = location.pathname == "/";

  useEffect(() => {
    axios.get(props.pokemon.url).then((response) => {
      setPokemon(response.data);
    });
  }, []);

  return (
    <CardContainer type={pokemon.types?.[0].type.name}>
      <div className="info-group">
        <a className="id-poke">
          {"#"}
          {pokemon.id?.toString().padStart(2, "0")}
        </a>
        <a className="name-poke">{pokemon.name}</a>
        <div className="tags">
          {pokemon.types?.map((type, index) => (
            // <div>{type.type.name}</div>
            <img key={"tag-" + index} src={images[type.type.name]} />
          ))}
        </div>
      </div>
      <div className="btn-group">
        <a className="link"> Detalhes</a>
        {isHomePage ? (
          <button
            onClick={() => {
              addPokemon(props.pokemon);
            }}
            className="btn"
          >
            Capturar!
          </button>
        ) : (
          <button
            onClick={() => {
              removePokemon(props.pokemon.name);
            }}
            className="btn danger"
          >
            Excluir
          </button>
        )}
      </div>
      <img className="pokeball" src={pokeball} alt="pokeball" />
      <img
        className="pokemon-img"
        src={pokemon?.sprites?.other["official-artwork"].front_default}
        alt="pokemon"
      />
    </CardContainer>
  );
};
