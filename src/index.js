import './scss/style.scss';
import './js/trend-chart';
import './js/age-chart';

import data from './js/data.js';

// update statistics
document.getElementById('last-update').innerText = new Date(data.lastUpdated)
    .toLocaleString("en-SG", {
        timeZone: 'Asia/Singapore',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });

document.getElementById('case-number').innerText = data.statistics.cases.total;
document.getElementById('death-number').innerText = data.statistics.deaths.total;
document.getElementById('recover-number').innerText = data.statistics.recovered.total;