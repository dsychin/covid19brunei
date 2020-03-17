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