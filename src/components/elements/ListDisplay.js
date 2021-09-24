import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  padding-left: 0;
  justify-content: ${({ alignment }) =>
    alignment === "center" ? "center" : "flex-start"};
`;

const ListDisplay = ({ list, property, alignment }) => {
  return (
    <>
      {list ? (
        <UnorderedList alignment={alignment}>
          {list.map((el) => (
            <li key={!property ? el : el[property]}>
              <Badge>{!property ? el : el[property]}</Badge>
            </li>
          ))}
        </UnorderedList>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
};

export default ListDisplay;
