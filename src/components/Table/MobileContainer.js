import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

import PokemonCard from "./PokemonCard";

const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileContainer = ({ pokemonList }) => {
  return (
    <CardsContainer>
      {pokemonList.map((el, i) => (
        <PokemonCard key={i} pokemon={el} />
      ))}
    </CardsContainer>
  );
};

export default MobileContainer;
