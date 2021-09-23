import React from "react";
import { Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";

const Settings = ({ sortedField, setSortedField, order, setOrder }) => {
  const handleFilterSelect = (e) => {
    setSortedField(e);
  };

  const handleChange = (type) => {
    setOrder(type);
  };

  return (
    <section>
      Sort By
      <DropdownButton
        onSelect={handleFilterSelect}
        id="dropdown-basic-button"
        title={sortedField === "num" ? "Number" : "Name"}
      >
        <Dropdown.Item eventKey="num">Number</Dropdown.Item>
        <Dropdown.Item eventKey="name">Name</Dropdown.Item>
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

export default Settings;
