import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  padding-left: 0;
`;

const ListDisplay = ({ list, property }) => {
  return (
    <>
      {list ? (
        <UnorderedList>
          {list.map((el) => (
            <li key={!property ? el : el[property]}>
              <Badge>{!property ? el : el[property]}</Badge>
            </li>
          ))}
        </UnorderedList>
      ) : (
        <div>"No Data Found"</div>
      )}
    </>
  );
};

export default ListDisplay;
