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

  return (
    <CustomCard style={{ width: "100%" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title as="h2">{name}</Card.Title>
        <Card.Text>
          <DataDisplay title="Height" data={height} />
          <DataDisplay title="Weight" data={weight} />

          <DataDisplay title="Type" data={type} list="true" />
          <DataDisplay title="Weaknesses" data={weaknesses} list="true" />

          <p>
            Next Evolution:
            {next_evolution ? (
              <ListDisplay list={next_evolution} property="name" />
            ) : (
              "no more evolution"
            )}{" "}
          </p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{num}</Card.Footer>
    </CustomCard>
  );
};

export default PokemonCard;
