import React from "react";

import Settings from "./components/Settings";
import DataDisplay from "./components/DataDisplay";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokemon </h1>
      </header>
      <body>
        <Settings />
        <DataDisplay />
      </body>
    </div>
  );
}

export default App;
