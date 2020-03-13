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
            '1',
            '2',
            '3',
            '4',
            '5'
        ],
        datasets: [{
            label: 'Number of Cases',
            data: [1, 6, 11, 25, 37]
        }]
    } 
});