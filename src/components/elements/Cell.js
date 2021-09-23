import styled from "styled-components";

export const Cell = styled.td`
  margin: auto;
  text-align: center;
  vertical-align: middle;
  font-weight: ${({ header }) => (header ? 700 : 500)};
`;
