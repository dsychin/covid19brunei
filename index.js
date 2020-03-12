import './style.css';

import Chart from 'chart.js';
import cases from './data/cases.json';

console.log(cases);
document.getElementById('case-number').innerText = cases.length;

let ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
    type: 'bar',
    data: [1, 3, 11, 25]
});