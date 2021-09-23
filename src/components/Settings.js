import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Settings = ({ sortedField, setSortedField }) => {
  const handleFilterSelect = (e) => {
    setSortedField(e);
  };

  return (
    <section>
      Sort By
      <DropdownButton
        onSelect={handleFilterSelect}
        id="dropdown-basic-button"
        title={sortedField}
      >
        <Dropdown.Item eventKey="num">Number</Dropdown.Item>
        <Dropdown.Item eventKey="name">Name</Dropdown.Item>
      </DropdownButton>
    </section>
  );
};

export default Settings;
