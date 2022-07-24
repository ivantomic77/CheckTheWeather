const button = document.querySelector('.submit');
const inputValue = document.querySelector('.inputValue');
const names = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const info = document.querySelectorAll('.text');
const infoImg = document.querySelector('.infoImg');

button.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=9d2b91e2053beb716b74b90f1b581b6f`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const nameValue = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].main;

            names.innerHTML = `${nameValue}`;
            temp.innerHTML = `${Math.round(Number(temperature) - 273.15)}°C`;
            desc.innerHTML = description;

            switch (description) {
                case 'Clear':
                    infoImg.src = './img/sun.png';
                    break;
                case 'Clouds':
                    infoImg.src = './img/cloud.png';
                    break;
            }
        })
        .catch(err => alert("Wrong city name"))
});