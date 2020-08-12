import React from "react";

import { Helmet } from "react-helmet";
import { Navbar } from "@blueprintjs/core";

import Configuration from "./Configuration";

import styles from "./App.module.css";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Blue hoofs</title>
        <meta name="description" content="Mi band 2 for hoofs friends" />
      </Helmet>
      <Configuration />
      <Navbar fixedToTop className={styles.toBottom}>
        <Navbar.Group align="center" className={styles.center}>
          <Navbar.Heading>Blue hoofs</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    </>
  );
}

export default App;
