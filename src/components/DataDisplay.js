import React from "react";
import { Table } from "react-bootstrap";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const DataDisplay = () => {
  return (
    <div>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </div>
  );
};

export default DataDisplay;
