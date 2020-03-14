import data from './data.js';

// get male count by age
let count = data.cases.reduce((acc, val) => {
    let index = acc.findIndex(a => a.x === val.gender);
    // push if not exist
    if (index === -1) {
        acc.push({
            x: val.gender,
            y: 1
        })
    } else {
        // increment if exists
        acc[index].y++;
    }
    return acc;
}, []);