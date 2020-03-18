import React from "react";

import Stats from "./components/Stats";
import Trends from "./components/Trends";
import ExternalLinks from "./components/ExternalLinks";
import AdviceLine from "./components/AdviceLine";
import Footer from "./components/Footer";
import data from "./data/data";
import "./App.scss";

const Title = () => (
  <>
    <h1>Brunei COVID-19 Tracker</h1>

    <div className="last-updated">
      Last Updated:{" "}
      {new Date(data.lastUpdated).toLocaleString("en-SG", {
        timeZone: "Asia/Singapore",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      })}
    </div>
  </>
);

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Stats />
        <Trends />
        <ExternalLinks />
        <AdviceLine />
        <Footer />
      </div>
    </div>
  );
};

export default App;
