import './scss/style.scss';

import data from './data.js';

// update statistics
document.getElementById('last-update').innerText = data.lastUpdated;

document.getElementById('case-number').innerText = data.statistics.cases.total;
document.getElementById('death-number').innerText = data.statistics.deaths.total;
document.getElementById('recover-number').innerText = data.statistics.recovered.total;

// get count for each days
let timeline = [];
let count = data.cases.reduce((acc, val) => {
    acc[val.date] = (acc[val.date] || 0)  + 1
    return acc;
  }, {});
  console.log(count);

// data.cases.forEach(value => {
//     if (value.date )
// })

// create chart
let ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Number of Cases',
            fill: false,
            borderColor: '#dc3545',
            backgroundColor: '#dc3545',
            data: [
                {
                    t: '2020-03-09',
                    y: 1
                },
                {
                    t: '2020-03-10',
                    y: 6
                },
                {
                    t: '2020-03-11',
                    y: 11
                },
                {
                    t: '2020-03-12',
                    y: 25
                },
                {
                    t: '2020-03-13',
                    y: 37
                }]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Brunei COVID-19 Case Trends'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'linear',
                time: {
                    unit: 'day',
                    unitStepSize: 1,
                    displayFormats: {
                        day: 'DD MMM'
                    }
                }
            }]
        }
    }
});