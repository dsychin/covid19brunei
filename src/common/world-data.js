// TODO: TO BE REMOVED
import numeral from 'numeral';

$.get('https://covid-19-api-b9p7dmxht.now.sh/api', (data) => {
    document.getElementById('global-case-number').innerText = numeral(data.confirmed.value).format('0,0');
    document.getElementById('global-death-number').innerText = numeral(data.deaths.value).format('0,0');
    document.getElementById('global-recover-number').innerText = numeral(data.recovered.value).format('0,0');

    document.getElementById('loader-global').style.display = 'none';
    document.getElementById('stat-global').style.display = 'flex';
});

$.get('https://covid-19-api-b9p7dmxht.now.sh/api/countries/CN', (data) => {
    document.getElementById('china-case-number').innerText = numeral(data.confirmed.value).format('0,0');
    document.getElementById('china-death-number').innerText = numeral(data.deaths.value).format('0,0');
    document.getElementById('china-recover-number').innerText = numeral(data.recovered.value).format('0,0');

    document.getElementById('loader-china').style.display = 'none';
    document.getElementById('stat-china').style.display = 'flex';
});

$.get('https://covid-19-api-b9p7dmxht.now.sh/api/confirmed', (data) => {
    let tableRows = '';

    data.forEach(value => {
        tableRows += `<tr>
            <td>${value.provinceState ? value.provinceState + ', ' : ''}${value.countryRegion}</td>
            <td>${numeral(value.confirmed).format(0,0)}</td>
            <td>${numeral(value.deaths).format(0,0)}</td>
            <td>${numeral(value.recovered).format(0,0)}</td>
            </tr>`
    })

    $('#country-table tbody').html(tableRows);

    $(document).ready( function () {
        $('#country-table').DataTable({
            responsive: true,
            order: [[1, 'desc']]
        });
    } );
});