import React, { useState } from "react";

import { useFetch } from "./hooks/useFetch";

import Settings from "./components/Settings";
import DataDisplay from "./components/DataDisplay";
import Layout from "./components/elements/Layout";
import { Title } from "./components/elements/Title";

function App() {
  const { isLoading, serverError, apiData } = useFetch();

  return (
    <Layout>
      <header>
        <Title>Pokemon's List</Title>
      </header>
      <body>
        {isLoading && <span>Loading ... </span>}
        {!isLoading && serverError && <span>Error in Fetching data ... </span>}
        {!isLoading && apiData && (
          <>
            <Settings />
            <DataDisplay />
          </>
        )}
      </body>
    </Layout>
  );
}

export default App;
