const timer = document.querySelector('.timer__time');

const dateEnd = '31 march 2022';

let interval

const updateClock = () => {
    const date = new Date();
    const newDate = new Date(dateEnd).getTime();
    const timeRunning = (newDate - date) / 1000;

    const day = Math.floor(timeRunning / 60 / 60 / 24)
    const hours = Math.floor(timeRunning / 60 / 60 % 24);
    const minutes = Math.floor((timeRunning / 60) % 60);
    const seconds = Math.floor(timeRunning % 60);

    const fDay = day < 10 ? '0' + day : day;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;

    const time = `${fDay} дней, ${fHours}:${fMinutes}:${fSeconds}`;

    timer.textContent = time;

    if (timeRunning <= 0) {
        clearInterval();
        timer.textContent = '00:00:00'
    }
}

interval = setInterval(updateClock, 500);

