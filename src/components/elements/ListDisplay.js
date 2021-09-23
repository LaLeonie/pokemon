import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

const ListDisplay = ({ list, property }) => {
  return (
    <UnorderedList>
      {list.map((el) => (
        <li key={!property ? el : el[property]}>
          <Badge>{!property ? el : el[property]}</Badge>
        </li>
      ))}
    </UnorderedList>
  );
};

export default ListDisplay;
