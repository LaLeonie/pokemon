import React from "react";
import styled from "styled-components";

const DataDisplay = ({ title, data, list }) => {
  return (
    <div>
      {title}: {data}
    </div>
  );
};

export default DataDisplay;
