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
    let index = acc.findIndex(a => a.t === val.date);
    // push if not exist
    if (index === -1) {
        acc.push({
            t: val.date,
            y: 1
        })
    } else {
        // increment if exists
        acc[index].y++;
    }
    return acc;
}, []);

// change value to cumulative
count.map((value, index, array) => {
    if (index > 0) {
        value.y = array[index - 1].y + value.y
    }

    return value;
});
console.log(count);

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
            data: count
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