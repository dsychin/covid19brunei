import data from './data.js';

// get count for each days
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

// get count increase
let increaseCount = data.cases.reduce((acc, val) => {
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

// get MALE count for each days
let maleCount = data.cases.reduce((acc, val) => {
    let index = acc.findIndex(a => a.t === val.date);
    // check if male
    if (val.gender === 'M') {
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
    }
    return acc;
}, []);

// change value to cumulative
maleCount.map((value, index, array) => {
    if (index > 0) {
        value.y = array[index - 1].y + value.y
    }

    return value;
});

// get FEMALE count for each days
let femaleCount = data.cases.reduce((acc, val) => {
    let index = acc.findIndex(a => a.t === val.date);
    // check if male
    if (val.gender === 'F') {
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
    }
    return acc;
}, []);

// change value to cumulative
femaleCount.map((value, index, array) => {
    if (index > 0) {
        value.y = array[index - 1].y + value.y
    }

    return value;
});

// create chart
let ctx = document.getElementById('chart');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Total',
            fill: false,
            borderColor: '#ffa000',
            backgroundColor: '#ffa000',
            data: count
        },
        {
            label: 'Male',
            fill: false,
            borderColor: '#1e88e5',
            backgroundColor: '#1e88e5',
            data: maleCount
        },
        {
            label: 'Female',
            fill: false,
            borderColor: '#d81b60',
            backgroundColor: '#d81b60',
            data: femaleCount
        },
        {
            label: 'Increase',
            fill: false,
            borderColor: '#757575',
            backgroundColor: '#757575',
            data: increaseCount
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                tension: 0
            }
        },
        tooltips: {
            mode: 'x',
            intersect: false
        },
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