import './scss/style.scss';

import data from './data.json';

// update statistics
document.getElementById('case-number').innerText = data.statistics.cases.total;

let ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
    type: 'bar',
    data: [1, 3, 11, 25]
});