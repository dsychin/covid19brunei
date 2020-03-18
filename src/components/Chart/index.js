import React from "react";
import PropTypes from "prop-types";
import Chart from "chart.js";

class LineChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { data, title } = this.props;
    if (!data.length) return;
    const chartOptions = {
      type: "line",
      data: {
        datasets: data.map(each => ({
          label: each.label,
          fill: false,
          borderColor: each.borderColor,
          backgroundColor: each.backgroundColor,
          data: each.data
        }))
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0
          }
        },
        tooltips: {
          mode: "x",
          intersect: false
        },
        title: {
          display: true,
          text: title
        },
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "linear",
              time: {
                unit: "day",
                unitStepSize: 1,
                displayFormats: {
                  day: "DD MMM"
                }
              }
            }
          ]
        }
      }
    };
    new Chart(this.chart, chartOptions);
  }

  render() {
    const { title } = this.props;
    return <canvas key={title} ref={o => (this.chart = o)} />;
  }
}

class BarChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.array
  };

  componentDidMount() {
    const { data, title, labels } = this.props;
    if (!data.length) return;
    const chartOptions = {
      type: "bar",
      data: {
        labels: labels,
        datasets: data.map(each => ({
          label: each.label,
          borderColor: each.borderColor,
          backgroundColor: each.backgroundColor,
          data: each.data
        }))
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          mode: "index",
          intersect: false
        },
        title: {
          display: true,
          text: title
        },
        scales: {
          xAxes: [
            {
              stepSize: 1,
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                precision: 0,
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
    new Chart(this.chart, chartOptions);
  }

  render() {
    const { title } = this.props;
    return <canvas key={title} ref={o => (this.chart = o)} />;
  }
}

export { LineChart, BarChart };
