import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Settings = () => {
  return (
    <section>
      Sort By
      <DropdownButton id="dropdown-basic-button" title="Select">
        <Dropdown.Item>Select</Dropdown.Item>
        <Dropdown.Item>Name</Dropdown.Item>
        <Dropdown.Item>Number</Dropdown.Item>
      </DropdownButton>
    </section>
  );
};

export default Settings;
