import React, { useState, useEffect } from "react";
import { LineChart, BarChart } from "../Chart";
import { Tabs, Tab, Paper } from "@material-ui/core";
import Axios from "axios";

let ageLabels = [
  "0 - 9",
  "10 - 19",
  "20 - 29",
  "30 - 39",
  "40 - 49",
  "50 - 59",
  "60 - 69",
  "70 - 79",
  "80+"
];

const Trends = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [datasets, setDatasets] = useState([]);
  const [ageDatasets, setAgeDatasets] = useState([]);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    const getDatasets = async () => {
      const response = await Axios.get('https://public.needmasks.com/v1/brunei-cases');

      // sort by case number
      const data = response.data.result.sort((a, b) => {
        return parseInt(a.id) - parseInt(b.id);
      })
      // trim datetime to date only
      .map(value => {
        let newValue = value;
        newValue.report_date = value.report_date.substring(0, 10);
        return newValue;
      });

      setDatasets(getCaseTrend(data));
      setAgeDatasets(getAgeTrend(data));
    }

    getDatasets();
  }, []);

  return (
    <div className="trend">
      <h2>Trends</h2>
      <Paper elevation={3}>
        <Tabs value={tabIndex} onChange={handleChange}>
          <Tab label='Cases' />
          <Tab label='Age and Gender' />
        </Tabs>
        {tabIndex === 0 && <div className="chart">
          <LineChart title="Brunei COVID-19 Case Trends" data={datasets} />
        </div>}
        {tabIndex === 1 && <div className="chart">
          <BarChart
            title="Brunei COVID-19 Case by Age and Gender"
            data={ageDatasets}
            labels={ageLabels}
          />
        </div>}
      </Paper>
    </div>
  );
};

const getAgeTrend = data => {
  // get male count by age
  let maleCount = data.reduce((acc, val) => {
    if (acc.length === 0) {
      acc = Array(9).fill(0);
    }

    // exit current loop if not male
    if (val.gender === "FEMALE") {
      return acc;
    }

    let { age } = val;

    if (age < 10) {
      acc[0]++;
    } else if (age < 20) {
      acc[1]++;
    } else if (age < 30) {
      acc[2]++;
    } else if (age < 40) {
      acc[3]++;
    } else if (age < 50) {
      acc[4]++;
    } else if (age < 60) {
      acc[5]++;
    } else if (age < 70) {
      acc[6]++;
    } else if (age < 80) {
      acc[7]++;
    } else {
      acc[8]++;
    }

    return acc;
  }, []);

  // get male count by age
  let femaleCount = data.reduce((acc, val) => {
    if (acc.length === 0) {
      acc = Array(9).fill(0);
    }

    // exit current loop if not female
    if (val.gender === "MALE") {
      return acc;
    }

    let { age } = val;

    if (age < 10) {
      acc[0]++;
    } else if (age < 20) {
      acc[1]++;
    } else if (age < 30) {
      acc[2]++;
    } else if (age < 40) {
      acc[3]++;
    } else if (age < 50) {
      acc[4]++;
    } else if (age < 60) {
      acc[5]++;
    } else if (age < 70) {
      acc[6]++;
    } else if (age < 80) {
      acc[7]++;
    } else {
      acc[8]++;
    }

    return acc;
  }, []);
  return [
    {
      label: "Male",
      borderColor: "#1e88e5",
      backgroundColor: "#1e88e5",
      data: maleCount
    },
    {
      label: "Female",
      borderColor: "#d81b60",
      backgroundColor: "#d81b60",
      data: femaleCount
    }
  ];
};

const getCaseTrend = data => {
  // get count for each days
  let count = data.reduce((acc, val) => {
    let index = acc.findIndex(a => a.t === val.report_date);
    // push if not exist
    if (index === -1) {
      acc.push({
        t: val.report_date,
        y: 1
      });
    } else {
      // increment if exists
      acc[index].y++;
    }
    return acc;
  }, []);

  // change value to cumulative
  count.map((value, index, array) => {
    if (index > 0) {
      value.y = array[index - 1].y + value.y;
    }

    return value;
  });

  // get count increase
  let increaseCount = data.reduce((acc, val) => {
    let index = acc.findIndex(a => a.t === val.report_date);
    // push if not exist
    if (index === -1) {
      acc.push({
        t: val.report_date,
        y: 1
      });
    } else {
      // increment if exists
      acc[index].y++;
    }
    return acc;
  }, []);

  // get MALE count for each days
  let maleCount = data.reduce((acc, val) => {
    let index = acc.findIndex(a => a.t === val.report_date);
    // check if male
    if (val.gender === "MALE") {
      // push if not exist
      if (index === -1) {
        acc.push({
          t: val.report_date,
          y: 1
        });
      } else {
        // increment if exists
        acc[index].y++;
      }
    }
    return acc;
  }, []);

  // change value to cumulative
  maleCount.map((value, index, array) => {
    if (index > 0) {
      value.y = array[index - 1].y + value.y;
    }

    return value;
  });

  // get FEMALE count for each days
  let femaleCount = data.reduce((acc, val) => {
    let index = acc.findIndex(a => a.t === val.report_date);
    // check if male
    if (val.gender === "FEMALE") {
      // push if not exist
      if (index === -1) {
        acc.push({
          t: val.report_date,
          y: 1
        });
      } else {
        // increment if exists
        acc[index].y++;
      }
    }
    return acc;
  }, []);

  // change value to cumulative
  femaleCount.map((value, index, array) => {
    if (index > 0) {
      value.y = array[index - 1].y + value.y;
    }

    return value;
  });
  return [
    {
      label: "Total",
      fill: false,
      borderColor: "#ffa000",
      backgroundColor: "#ffa000",
      data: count
    },
    {
      label: "Male",
      fill: false,
      borderColor: "#1e88e5",
      backgroundColor: "#1e88e5",
      data: maleCount
    },
    {
      label: "Female",
      fill: false,
      borderColor: "#d81b60",
      backgroundColor: "#d81b60",
      data: femaleCount
    },
    {
      label: "Increase",
      fill: false,
      borderColor: "#757575",
      backgroundColor: "#757575",
      data: increaseCount
    }
  ];
};

export default Trends;
