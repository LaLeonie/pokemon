import React from "react";
import { Cell } from "../elements/Cell";

const TableHeader = () => {
  const cells = [
    "Image",
    "Name",
    "Number",
    "Height",
    "Weight",
    "Weaknesses",
    "Next Evolution",
    "Type",
  ];
  return (
    <thead>
      <tr>
        {cells.map((el, i) => (
          <Cell key={i} header>
            {el}
          </Cell>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
