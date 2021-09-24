import React from "react";
import { Table } from "react-bootstrap";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const DesktopContainer = ({ pokemonList }) => {
  return (
    <section>
      <Table responsive>
        <TableHeader />
        <TableBody pokemonList={pokemonList} />
      </Table>
    </section>
  );
};

export default DesktopContainer;
