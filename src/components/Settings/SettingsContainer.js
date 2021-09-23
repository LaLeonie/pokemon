import React from "react";
import { Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";

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
    <section>
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
      <ButtonGroup>
        {["ascending", "descending"].map((type) => (
          <Button
            className={order === type ? "selected" : ""}
            key={type}
            onClick={() => handleChange(type)}
          >
            {type}
          </Button>
        ))}
      </ButtonGroup>
    </section>
  );
};

export default SettingsContainer;