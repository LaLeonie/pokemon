import React from "react";
import ImageDisplay from "../elements/ImageDisplay";
import ListDisplay from "../elements/ListDisplay";
import { Cell } from "../elements/Cell";

const TableRow = ({ pokemon }) => {
  const {
    id,
    img,
    height,
    name,
    type,
    weaknesses,
    weight,
    next_evolution,
    num,
  } = pokemon;

  return (
    <tr key={id}>
      <Cell>
        <ImageDisplay image={img} />
      </Cell>
      <Cell>{name}</Cell>
      <Cell data-testid="number">{+num}</Cell>
      <Cell>{height}</Cell>
      <Cell>{weight}</Cell>
      <Cell>
        <ListDisplay list={weaknesses}></ListDisplay>
      </Cell>
      <Cell>
        {next_evolution ? (
          <ListDisplay list={next_evolution} property="name" />
        ) : (
          "no more evolution"
        )}
      </Cell>
      <Cell>
        <ListDisplay list={type}></ListDisplay>
      </Cell>
    </tr>
  );
};

export default TableRow;
