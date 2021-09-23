import React from "react";
import ImageDisplay from "./elements/ImageDisplay";

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
        <ul>
          {weaknesses.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </td>
      <td>
        {next_evolution ? (
          <ul>
            {next_evolution.map((el) => (
              <li key={el.name}>{el.name}</li>
            ))}
          </ul>
        ) : (
          "no more evolution"
        )}
      </td>
      <td>
        <ul>
          {type.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

export default TableRow;
