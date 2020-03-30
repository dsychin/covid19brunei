import React, { useEffect, useState } from "react";
import preval from "preval.macro";
import Axios from "axios";

import Stats from "./components/Stats";
import Trends from "./components/Trends";
import ExternalLinks from "./components/ExternalLinks";
import AdviceLine from "./components/AdviceLine";
import Footer from "./components/Footer";
import "./App.scss";
import Cases from "./components/Cases";

const build_date = preval`module.exports = new Date()`;

const Title = ({ date }) => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const getLastUpdated = async () => {
      const response = await Axios.get('https://covid19.mathdro.id/api/countries/BN');
      setLastUpdated(new Date(response.data.lastUpdate).toLocaleString("en-SG", {
        timeZone: "Asia/Singapore",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      }));
    }
    getLastUpdated();
  },[]);

  return (
    <>
      <h1>Brunei COVID-19 Tracker</h1>
  
      <div className="last-updated">
        Last Updated:{" "}
        {lastUpdated}
      </div>
    </>
  );
}

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Title date={build_date} />
        <Stats />
        <Trends />
        <Cases />
        <ExternalLinks />
        <AdviceLine />
        <Footer date={build_date} />
      </div>
    </div>
  );
};

export default App;
