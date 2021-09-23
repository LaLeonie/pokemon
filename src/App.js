import React, { useState, useMemo } from "react";

import { useFetch } from "./hooks/useFetch";

import Settings from "./components/Settings";
import DataDisplay from "./components/DataDisplay";
import Layout from "./components/elements/Layout";
import { Title } from "./components/elements/Title";

function App() {
  const [sortedField, setSortedField] = useState(null);
  const { isLoading, serverError, apiData } = useFetch();
  let sortedPokemonList;

  if (apiData) {
    sortedPokemonList = [...apiData.pokemon];
  }

  React.useMemo(() => {
    if (sortedField !== null) {
      sortedPokemonList.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
          return -1;
        }
        if (a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
    }
    return sortedPokemonList;
  }, [apiData, sortedField]);

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
            <Settings
              sortedField={sortedField}
              setSortedField={setSortedField}
            />
            <DataDisplay pokemonList={sortedPokemonList} />
          </>
        )}
      </body>
    </Layout>
  );
}

export default App;
