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

  const next_evolutions = next_evolution
    ? next_evolution.map((obj) => obj.name)
    : [];

  console.log(next_evolutions);

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
        <ListDisplay alignment="center" list={weaknesses} />
      </Cell>
      <Cell>
        <ListDisplay alignment="center" list={next_evolutions} />
      </Cell>
      <Cell>
        <ListDisplay alignment="center" list={type} />
      </Cell>
    </tr>
  );
};

export default TableRow;
