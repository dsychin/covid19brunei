// TODO: TO BE REMOVED
import data from './data.js';

let labels = [
    '0 - 9',
    '10 - 19',
    '20 - 29',
    '30 - 39',
    '40 - 49',
    '50 - 59',
    '60 - 69',
    '70 - 79',
    '80+'
];

// get male count by age
let maleCount = data.cases.reduce((acc, val) => {
    if (acc.length === 0) {
        acc = Array(9).fill(0);
    }

    // exit current loop if not male
    if (val.gender === 'F') {
        return acc;
    }

    let { age } = val;

    if (age < 10) {
        acc[0]++;
    }
    else if (age < 20) {
        acc[1]++;
    }
    else if (age < 30) {
        acc[2]++;
    }
    else if (age < 40) {
        acc[3]++;
    }
    else if (age < 50) {
        acc[4]++;
    }
    else if (age < 60) {
        acc[5]++;
    }
    else if (age < 70) {
        acc[6]++;
    }
    else if (age < 80) {
        acc[7]++;
    }
    else {
        acc[8]++;
    }

    return acc;
}, []);

// get male count by age
let femaleCount = data.cases.reduce((acc, val) => {
    if (acc.length === 0) {
        acc = Array(9).fill(0);
    }

    // exit current loop if not female
    if (val.gender === 'M') {
        return acc;
    }

    let { age } = val;

    if (age < 10) {
        acc[0]++;
    }
    else if (age < 20) {
        acc[1]++;
    }
    else if (age < 30) {
        acc[2]++;
    }
    else if (age < 40) {
        acc[3]++;
    }
    else if (age < 50) {
        acc[4]++;
    }
    else if (age < 60) {
        acc[5]++;
    }
    else if (age < 70) {
        acc[6]++;
    }
    else if (age < 80) {
        acc[7]++;
    }
    else {
        acc[8]++;
    }

    return acc;
}, []);

let ctx = document.getElementById('age-chart');
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
                label: 'Male',
                borderColor: '#1e88e5',
                backgroundColor: '#1e88e5',
                data: maleCount
            },
            {
                label: 'Female',
                borderColor: '#d81b60',
                backgroundColor: '#d81b60',
                data: femaleCount
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        title: {
            display: true,
            text: 'Brunei COVID-19 Case by Age and Gender'
        },
        scales: {
            xAxes: [{
                stepSize: 1,
                stacked: true
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    precision: 0,
                    beginAtZero: true
                }
            }]
        }
    }
});