import React from "react";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mi band 2 for hoofs friends</title>
        <meta name="description" content="Mi band 2 for hoofs friends" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
