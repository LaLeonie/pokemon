import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

import DataDisplay from "../elements/DataDisplay";
import ListDisplay from "../elements/ListDisplay";

const CustomCard = styled(Card)`
  img {
    max-width: 150px;
    margin: auto;
  }

  .card-body {
    padding: 1rem 1.5rem;
  }

  .card-title {
    color: ${({ theme: { colors } }) => colors.neutrals[500]};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.regularPlus};
    font-weight: 700;
  }

  .card-footer {
    text-align: right;
  }
`;

const PokemonCard = ({ pokemon }) => {
  const { img, height, name, type, weaknesses, weight, next_evolution, num } =
    pokemon;

  const next_evolutions = next_evolution
    ? next_evolution.map((obj) => obj.name)
    : [];

  return (
    <CustomCard style={{ width: "100%" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body as="div">
        <Card.Title as="h2">{name}</Card.Title>
        <Card.Text>
          <DataDisplay title="Height" data={height} />
          <DataDisplay title="Weight" data={weight} />

          <DataDisplay title="Type" data={type} list="true" />
          <DataDisplay title="Weaknesses" data={weaknesses} list="true" />
          <DataDisplay
            title="Next Evolution"
            data={next_evolutions}
            list="true"
          />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{num}</Card.Footer>
    </CustomCard>
  );
};

export default PokemonCard;
