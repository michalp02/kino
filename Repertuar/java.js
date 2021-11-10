let select = document.querySelector('select');
let text = document.querySelector('.text');
let city = document.querySelector('h4');
let show = "";
select.addEventListener('change', (e) => {
    const value = e.target.value;
    if (value === 'Katowice') {
        e.target.value = "";
        city.textContent = 'Katowice';
        text.innerHTML = `${Katowice.name1}<br><hr>
        ${Katowice.name2}<br><hr>
        ${Katowice.name3}<br><hr>`;
    } else if (value === 'Warszawa') {
        e.target.value = "";
        city.textContent = 'Warszawa';
        text.innerHTML = `${Warszawa.name1}<br><hr>
        ${Warszawa.name2}<br><hr>
        ${Warszawa.name3}<br><hr>`;
    } else if (value === 'Wrocław') {
        e.target.value = "";
        city.textContent = 'Wrocław';
        text.innerHTML = `${Wrocław.name1}<br><hr>
        ${Wrocław.name2}<br><hr>
        ${Wrocław.name3}<br><hr>`;
    } else {
        return;
    }
})