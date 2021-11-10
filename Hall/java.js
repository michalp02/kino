const input = [...document.querySelectorAll('input')];
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const log = document.querySelector('p span');
const cinema = document.querySelector('.cinema');
const approve = document.querySelector('.approve');
approve.disabled = true;

let text = '';

const show = (e) => {
    e.preventDefault();
    let text = `${email.value}${password.value}`;

    if (text === users[0].name) {
        log.textContent = email.value;
        approve.disabled = false;
    } else if (text === users[1].name) {
        log.textContent = email.value;
        approve.disabled = false;
    } else {
        log.textContent = 'Błędny login lub hasło';
    }
    email.value = '';
    password.value = '';

}
const logout = () => {
    const log = document.querySelector('p span');
    log.textContent = '';
    approve.disabled = true;
}
document.querySelector('button').addEventListener('click', show);
document.querySelector('.logout').addEventListener('click', logout);

// Film

const film = document.querySelector('.film');
let hall = document.querySelector('.hall');
const price = document.querySelector('h2 span');
let liczba = 0;
cinema.addEventListener('change', (e) => {
    const text = e.target.value;
    if (text == 'Katowice') {
        liczba = 0;
        price.textContent = 0;
        for (let i = 1; i <= 3; i++) {
            film[i].textContent = cinemaKatowice[i - 1];
            film[i].value = cinemaKatowice[i - 1];
            hall.textContent = '';
        };
        for (let i = 0; i < hallKatowice.rows; i++) {
            hall.innerHTML += `Rząd ${i+1} `;
            for (let j = 0; j < hallKatowice.columns; j++) {
                const div = document.createElement('div');
                div.textContent = `${j+1}`;
                div.dataset.row = i + 1;
                div.dataset.place = j + 1;
                hall.appendChild(div);

            }
            hall.innerHTML += '<br>';

        }

    } else if (text == 'Warszawa') {
        liczba = 0;
        price.textContent = 0;
        for (let i = 1; i <= 3; i++) {
            film[i].textContent = cinemaWarszawa[i - 1];
            film[i].value = cinemaWarszawa[i - 1];
            hall.textContent = '';
        };
        for (let i = 0; i < hallWarszawa.rows; i++) {
            hall.innerHTML += `Rząd ${i+1} `;
            for (let j = 0; j < hallWarszawa.columns; j++) {
                const div = document.createElement('div');
                div.textContent = `${j+1}`;
                div.dataset.row = i + 1;
                div.dataset.place = j + 1;
                hall.appendChild(div);

            }
            hall.innerHTML += '<br>';
        }
    } else if (text == 'Wrocław') {
        liczba = 0;
        price.textContent = 0;
        for (let i = 1; i <= 3; i++) {
            film[i].textContent = cinemaWrocław[i - 1];
            film[i].value = cinemaWrocław[i - 1];
            hall.textContent = '';
        };
        for (let i = 0; i < hallWrocław.rows; i++) {
            hall.innerHTML += `Rząd ${i+1} `;
            for (let j = 0; j < hallWrocław.columns; j++) {
                const div = document.createElement('div');
                div.textContent = `${j+1}`;
                div.dataset.row = i + 1;
                div.dataset.place = j + 1;
                hall.appendChild(div);

            }
            hall.innerHTML += '<br>';
        }
    } else {
        liczba = 0;
        price.textContent = 0;
        for (let i = 1; i <= 3; i++) {
            film[i].textContent = 'Film...';
            film[i].value = '';
            hall.textContent = '';
        }

    }

    const seat = [...document.querySelectorAll('div')];
    seat.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('blue');

            if (el.classList.contains('blue')) {
                liczba++;
                price.textContent = liczba * 10;
            } else {
                liczba--;
                price.textContent = liczba * 10;
            }
        })
    })

})

// Hour
const hour = document.querySelector('.hour');
film.addEventListener('change', (e) => {
    if (e.target.value == 'Spider-Man') {
        hour.textContent = '';
        for (let i = 0; i < spiderMann.length; i++) {
            let option = document.createElement('option');
            option.textContent = spiderMann[i];
            hour.appendChild(option);
        }
    } else if (e.target.value == 'Supa Modo') {
        hour.textContent = '';
        for (let i = 0; i < supaModo.length; i++) {
            let option = document.createElement('option');
            option.textContent = supaModo[i];
            hour.appendChild(option);
        }
    } else if (e.target.value == 'Midsommar') {
        hour.textContent = '';
        for (let i = 0; i < midsommar.length; i++) {
            let option = document.createElement('option');
            option.textContent = midsommar[i];
            hour.appendChild(option);
        }
    } else if (e.target.value == 'Król Lew') {
        hour.textContent = '';
        for (let i = 0; i < krolLew.length; i++) {
            let option = document.createElement('option');
            option.textContent = krolLew[i];
            hour.appendChild(option);
        }
    } else if (e.target.value == 'Szybcy i wściekli') {
        hour.textContent = '';
        for (let i = 0; i < szybcy.length; i++) {
            let option = document.createElement('option');
            option.textContent = szybcy[i];
            hour.appendChild(option);
        }
    } else if (e.target.value == 'Fighter') {
        hour.textContent = '';
        for (let i = 0; i < fighter.length; i++) {
            let option = document.createElement('option');
            option.textContent = fighter[i];
            hour.appendChild(option);
        }
    } else if (e.target.value == 'Zgrzeszyliśmy') {
        hour.textContent = '';
        for (let i = 0; i < grzech.length; i++) {
            let option = document.createElement('option');
            option.textContent = grzech[i];
            hour.appendChild(option);
        }

    } else if (e.target.value == 'Pokemon') {
        hour.textContent = '';
        for (let i = 0; i < pokemon.length; i++) {
            let option = document.createElement('option');
            option.textContent = pokemon[i];
            hour.appendChild(option);
        }

    } else if (e.target.value == 'Yesterday') {
        hour.textContent = '';
        for (let i = 0; i < yesterday.length; i++) {
            let option = document.createElement('option');
            option.textContent = yesterday[i];
            hour.appendChild(option);
        }

    }
})
//Summary

const citySummary = document.querySelector('.info h3:nth-child(1) span');
const filmSummary = document.querySelector('.info h3:nth-child(2) span');
const hourSummary = document.querySelector('.info h3:nth-child(3) span');
const placeSummary = document.querySelector('.info h3:nth-child(4) span');
const priceSummary = document.querySelector('.info h3:nth-child(5) span');
let textPlace = '';
const summary = document.querySelector('.summary');
approve.addEventListener('click', () => {
    const blue = [...document.querySelectorAll('.blue')];
    summary.style.display = 'block';
    window.scrollTo(0, 1000)
    citySummary.textContent = cinema.value;
    filmSummary.textContent = film.value;
    hourSummary.textContent = hour.value;
    textPlace = '';
    blue.forEach(el => {
        textPlace += `Rząd: ${el.dataset.row},  Miejsce: ${el.dataset.place}` + '</br>';

    })
    placeSummary.innerHTML = textPlace;
    priceSummary.textContent = price.textContent;
    logout();
})

//Regex

const patterns = {
    email: /^([a-z\d\.-]+)@([a-z\d-]+)(\.[a-z]{2,8})(\.[a-z]{2})?$/,
    password: /(?=^.{8})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/
}


function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    } else
        field.className = "invalid";
}

input.forEach((el) => {
    el.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})