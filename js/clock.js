const clock = document.querySelector("h2#clock");

function getClock() {
    const data = new Date();
    clock.innerText = `${data.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);