const clock = document.querySelector("h2#clock");

function getClock() {
    const data = new Date();
    const hours = String(date.getHours()).paddStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerTEXT = '${hours}:${minutes};${seconds}';
}

getClock();
setInterval(getClock, 1000);