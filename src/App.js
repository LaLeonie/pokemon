import React from "react";

import Settings from "./components/Settings";
import DataDisplay from "./components/DataDisplay";

import Layout from "./components/elements/Layout";
import { Title } from "./components/elements/Title";

function App() {
  return (
    <Layout>
      <header>
        <Title>Pokemon </Title>
      </header>
      <body>
        <Settings />
        <DataDisplay />
      </body>
    </Layout>
  );
}

export default App;
