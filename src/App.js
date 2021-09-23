import React, { useState, useMemo } from "react";

import { useFetch } from "./hooks/useFetch";
import { sortList } from "./utils/sortList";

import SettingsContainer from "./components/Settings/SettingsContainer";
import TableContainer from "./components/Table/TableContainer";
import Layout from "./components/elements/Layout";
import { Title, Subtitle } from "./components/elements/Titles";

function App() {
  const [sortedField, setSortedField] = useState("num");
  const [order, setOrder] = useState("ascending");
  const { isLoading, serverError, apiData } = useFetch();
  let sortedPokemonList;

  if (apiData) {
    sortedPokemonList = [...apiData.pokemon];
  }

  useMemo(() => {
    if (sortedPokemonList) {
      return sortList(sortedPokemonList, sortedField, order);
    }
  }, [sortedPokemonList, sortedField, order]);

  return (
    <Layout>
      <header>
        <Title>Pokemon's Academy</Title>
        <Subtitle>Meet our finest students</Subtitle>
      </header>

      {isLoading && <span>Loading ... </span>}
      {!isLoading && serverError && <span>Error in Fetching data ... </span>}
      {!isLoading && apiData && (
        <>
          <SettingsContainer
            sortedField={sortedField}
            setSortedField={setSortedField}
            order={order}
            setOrder={setOrder}
          />
          <TableContainer pokemonList={sortedPokemonList} />
        </>
      )}
    </Layout>
  );
}

export default App;
