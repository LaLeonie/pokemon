import React from "react";
import styled from "styled-components";
import ListDisplay from "./ListDisplay";

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 1rem;

  .title {
    color: ${({ theme: { colors } }) => colors.neutrals[300]};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
    margin-bottom: 0.2rem;
  }

  .data {
    font-weight: 500;
  }
`;

const DataDisplay = ({ title, data, list }) => {
  return (
    <DataContainer>
      <h3 className="title">{title}:</h3>
      {list ? <ListDisplay list={data} /> : <div className="data">{data}</div>}
    </DataContainer>
  );
};

export default DataDisplay;
