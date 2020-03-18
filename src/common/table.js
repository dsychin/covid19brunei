// TODO: TO BE REMOVED

import data from './data.js';

// generate table
let tableRows = '';
data.cases.forEach(value => {
    tableRows += `<tr>
        <td>${value.caseNumber}</td>
        <td>${value.age}</td>
        <td>${value.gender}</td>
        <td>${value.description}</td>
        <td>${new Date(value.date).toLocaleString("en-SG",
            {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
            })}</td>
        </tr>`
})

$('#case-details tbody').html(tableRows);

$(document).ready( function () {
    $('#case-details').DataTable({
        responsive: true
    });
} );