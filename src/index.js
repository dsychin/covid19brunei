import './scss/style.scss';

import data from './data.json';

// update statistics
document.getElementById('case-number').innerText = data.statistics.cases.total;
document.getElementById('death-number').innerText = data.statistics.deaths.total;
document.getElementById('recover-number').innerText = data.statistics.recovered.total;

let ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
    type: 'bar',
    data: [1, 3, 11, 25]
});