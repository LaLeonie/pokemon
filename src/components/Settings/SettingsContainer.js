import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";

import { BasicButton, ButtonContainer } from "../elements/Buttons";

const FlexContainer = styled.section`
  align-items: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .dropdown-toggle {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.neutrals[500]};
    border-radius: 0;
    color: ${({ theme: { colors } }) => colors.neutrals[500]};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
    min-width: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dropdown-toggle:active {
    background-color: transparent;
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.neutrals[500]};
    border-radius: 0;
    color: ${({ theme: { colors } }) => colors.neutrals[500]};
  }

  .dropdown-toggle:hover,
  .dropdown-toggle:focus {
    background-color: transparent;
    border: 2px solid ${({ theme: { colors } }) => colors.neutrals[500]};
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.neutrals[500]};
    color: ${({ theme: { colors } }) => colors.neutrals[500]};
  }
`;

const SettingsContainer = ({
  sortedField,
  setSortedField,
  order,
  setOrder,
}) => {
  const handleFilterSelect = (e) => {
    setSortedField(e);
  };

  const handleChange = (type) => {
    setOrder(type);
  };

  return (
    <FlexContainer>
      Sorted By
      <DropdownButton
        onSelect={handleFilterSelect}
        id="dropdown-basic-button"
        title={sortedField === "num" ? "Number" : "Name"}
      >
        <Dropdown.Item data-testid="number-select" eventKey="num">
          Number
        </Dropdown.Item>
        <Dropdown.Item data-testid="name-select" eventKey="name">
          Name
        </Dropdown.Item>
      </DropdownButton>
      <ButtonContainer>
        {["ascending", "descending"].map((type) => (
          <BasicButton
            status={order === type ? "selected" : ""}
            key={type}
            onClick={() => handleChange(type)}
          >
            {type}
          </BasicButton>
        ))}
      </ButtonContainer>
    </FlexContainer>
  );
};

export default SettingsContainer;
