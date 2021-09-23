import React from "react";
import { Cell } from "../elements/Cell";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <Cell header>Image</Cell>
        <Cell header>Name</Cell>
        <Cell header>Number</Cell>
        <Cell header>Height</Cell>
        <Cell header>Weight</Cell>
        <Cell header>Weakness</Cell>
        <Cell header>Next Evolution</Cell>
        <Cell header>Type</Cell>
      </tr>
    </thead>
  );
};

export default TableHeader;
