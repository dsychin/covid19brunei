import './scss/style.scss';

import data from './data.json';

// update statistics
document.getElementById('last-update').innerText = data.lastUpdated;

document.getElementById('case-number').innerText = data.statistics.cases.total;
document.getElementById('death-number').innerText = data.statistics.deaths.total;
document.getElementById('recover-number').innerText = data.statistics.recovered.total;

let ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '9 March',
            '10 March',
            '11 March',
            '12 March',
            '13 March'
        ],
        datasets: [{
            label: 'Number of Cases',
            fill: false,
            borderColor: '#dc3545',
            backgroundColor: '#dc3545',
            data: [1, 6, 11, 25, 37]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Brunei COVID-19 Case Trends'
        }
    }
});