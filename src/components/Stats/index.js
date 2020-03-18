import React, { useEffect, useState } from "react";
import api from "../../common/api";
import numeral from "numeral";
import data from "../../data/data";

const Stats = () => {
  const [allData, setAllData] = useState(null);
  const [chinaData, setChinaData] = useState(null);
  const {
    statistics: { cases, deaths, recovered }
  } = data;

  useEffect(() => {
    const getData = () =>
      api.get("/api").then(({ data }) => {
        setAllData(data);
      });
    const getChinaData = () =>
      api.get("/api/countries/CN").then(({ data }) => {
        setChinaData(data);
      });
    getData();
    getChinaData();
  }, []);

  return (
    <div className="stats">
      <h2>Statistics</h2>
      <h3>Brunei</h3>
      <div className="wrapper">
        <div className="stat">
          <div id="case-number" className="number">
            {cases.total}
          </div>
          <div className="stat-title">Cases</div>
        </div>
        <div className="stat">
          <div id="death-number" className="number">
            {deaths.total}
          </div>
          <div className="stat-title">Deaths</div>
        </div>
        <div className="stat">
          <div id="recover-number" className="number">
            {recovered.total}
          </div>
          <div className="stat-title">Recovered</div>
        </div>
      </div>
      <h3>Global</h3>
      {!allData ? (
        <div id="loader-global" className="loader">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="wrapper" id="stat-global">
          <div className="stat">
            <div id="global-case-number" className="number">
              {numeral(allData.confirmed.value).format("0,0")}
            </div>
            <div className="stat-title">Cases</div>
          </div>
          <div className="stat">
            <div id="global-death-number" className="number">
              {numeral(allData.deaths.value).format("0,0")}
            </div>
            <div className="stat-title">Deaths</div>
          </div>
          <div className="stat">
            <div id="global-recover-number" className="number">
              {numeral(allData.recovered.value).format("0,0")}
            </div>
            <div className="stat-title">Recovered</div>
          </div>
        </div>
      )}
      <h3>China</h3>
      {!chinaData ? (
        <div id="loader-china" className="loader">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div id="stat-china" className="wrapper">
          <div className="stat">
            <div id="china-case-number" className="number">
              {numeral(chinaData.confirmed.value).format("0,0")}
            </div>
            <div className="stat-title">Cases</div>
          </div>
          <div className="stat">
            <div id="china-death-number" className="number">
              {numeral(chinaData.deaths.value).format("0,0")}
            </div>
            <div className="stat-title">Deaths</div>
          </div>
          <div className="stat">
            <div id="china-recover-number" className="number">
              {numeral(chinaData.recovered.value).format("0,0")}
            </div>
            <div className="stat-title">Recovered</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
