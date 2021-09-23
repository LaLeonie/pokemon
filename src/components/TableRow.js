import React from "react";
import ImageDisplay from "./elements/ImageDisplay";
import ListDisplay from "./elements/ListDisplay";

const TableRow = ({ pokemon }) => {
  console.log(pokemon);
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
      <td>
        <ImageDisplay image={img} />
      </td>
      <td>{name}</td>
      <td>{+num}</td>
      <td>{height}</td>
      <td>{weight}</td>
      <td>
        <ListDisplay list={weaknesses}></ListDisplay>
      </td>
      <td>
        {next_evolution ? (
          <ListDisplay list={next_evolution} property="name" />
        ) : (
          "no more evolution"
        )}
      </td>
      <td>
        <ListDisplay list={type}></ListDisplay>
      </td>
    </tr>
  );
};

export default TableRow;
