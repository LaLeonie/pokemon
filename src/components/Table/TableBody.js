import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ pokemonList }) => {
  return (
    <tbody>
      {pokemonList.map((pokemon, i) => (
        <TableRow key={i} pokemon={pokemon} />
      ))}
    </tbody>
  );
};

export default TableBody;
