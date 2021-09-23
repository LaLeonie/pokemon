import React from "react";
import { Table } from "react-bootstrap";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const TableContainer = ({ pokemonList }) => {
  return (
    <section>
      <Table responsive>
        <TableHeader />
        <TableBody pokemonList={pokemonList} />
      </Table>
    </section>
  );
};

export default TableContainer;
