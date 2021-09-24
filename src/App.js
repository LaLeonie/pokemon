import React, { useState, useMemo } from "react";

import { useFetch } from "./hooks/useFetch";
import { useViewport } from "./hooks/useViewport";
import { sortList } from "./utils/sortList";

import SettingsContainer from "./components/Settings/SettingsContainer";
import DesktopContainer from "./components/Table/DesktopContainer";
import MobileContainer from "./components/Table/MobileContainer";
import Layout from "./components/elements/Layout";
import { Title, Subtitle } from "./components/elements/Titles";

function App() {
  const [sortedField, setSortedField] = useState("num");
  const [order, setOrder] = useState("ascending");
  const { isLoading, serverError, apiData } = useFetch();
  const { width } = useViewport();
  const breakpoint = 620;

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
          {width < breakpoint ? (
            <MobileContainer pokemonList={sortedPokemonList} />
          ) : (
            <DesktopContainer pokemonList={sortedPokemonList} />
          )}
        </>
      )}
    </Layout>
  );
}

export default App;
