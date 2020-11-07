import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <div>
        <h2 data-ns-test="project-name">Movies</h2>
        <p data-ns-test="project-description">Comedy, Horror, Romance</p>
      </div>
      <div>
        <h2 data-ns-test="project-name">Birds</h2>
        <p data-ns-test="project-description">Peacock, Parrot, Dove</p>
      </div>
    </>
  );
};

export default App;