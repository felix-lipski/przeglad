import type { Component } from "solid-js";

import "./main.css";

// import styles from "./App.module.css";

const artists = [
  "Seweryn",
  "Ola Poskrop",
  "Stas",
  "Skinny Pope",
  "Felix Lipski",
];


const App: Component = () => {
  return (
    <>
      <header>
        <h1>Przegląd</h1>
      </header>
      <main>
        <Divider />
        <About />
        <Divider />
        <Lineup />
      </main>
    </>
  );
};

const About: Component = () => (
  <article>
    <h1>About</h1>
  </article>
);

const Lineup: Component = () => (
  <article>
    <h1>Lineup</h1>
    <div class="arists">
      {artists.map((artist) => (
        <section>{artist}</section>
      ))}
    </div>
  </article>
);

const Divider: Component = () => (
  <div>
    <hr />
  </div>
);

export default App;
