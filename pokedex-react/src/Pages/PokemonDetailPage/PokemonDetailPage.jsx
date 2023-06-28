import React, { useContext } from "react";
import { PokemonContext } from "../../Context/PokemonContext";
import { DetailContainer } from "./PodemonDetailPageStyles";

export const PokemonDetailPage = () => {
  const { pokemonDetails } = useContext(PokemonContext);
  console.log(pokemonDetails);
  return (
    <DetailContainer type={pokemonDetails.types?.[0].type.name}>
      {pokemonDetails.name}
      <div className="grid">
        <img src={pokemonDetails.sprites.front_default} alt="" />
        <img src={pokemonDetails.sprites.back_default} alt="" />

        <div className="stats">
          <div className="info-stats">
            {pokemonDetails?.stats?.map((item) => {
              console.log(item);
              return <div>{item.stat.name}</div>;
            })}
          </div>
        </div>
      </div>

      <div className="infos"></div>
    </DetailContainer>
  );
};
