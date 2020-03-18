import React from "react";
import preval from "preval.macro";

import Stats from "./components/Stats";
import Trends from "./components/Trends";
import ExternalLinks from "./components/ExternalLinks";
import AdviceLine from "./components/AdviceLine";
import Footer from "./components/Footer";
import "./App.scss";

const build_date = preval`module.exports = new Date()`;

const Title = ({ date }) => (
  <>
    <h1>Brunei COVID-19 Tracker</h1>

    <div className="last-updated">
      Last Updated:{" "}
      {new Date(date).toLocaleString("en-SG", {
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
        <Title date={build_date} />
        <Stats />
        <Trends />
        <ExternalLinks />
        <AdviceLine />
        <Footer date={build_date} />
      </div>
    </div>
  );
};

export default App;
