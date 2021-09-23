import React from "react";
import { Table } from "react-bootstrap";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const DataDisplay = ({ pokemonList }) => {
  return (
    <div>
      <Table responsive>
        <TableHeader />
        <TableBody pokemonList={pokemonList} />
      </Table>
    </div>
  );
};

export default DataDisplay;
