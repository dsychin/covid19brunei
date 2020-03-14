import './scss/style.scss';
import './js/trend-chart';

import data from './js/data.js';

// update statistics
document.getElementById('last-update').innerText = data.lastUpdated;

document.getElementById('case-number').innerText = data.statistics.cases.total;
document.getElementById('death-number').innerText = data.statistics.deaths.total;
document.getElementById('recover-number').innerText = data.statistics.recovered.total;
