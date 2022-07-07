let wakeuptime = 7;
const noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
const evening = 18;

// Show the current time on the page
let showCurrentTime = function() {
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // Setting hours
    if (hours >= noon)
        meridian = "PM";
    if (hours > noon) // Past noon, hour shown can't be > 12
        hours = hours - 12;
    
    // Setting minutes
    if (minutes < 10)
        minutes = "0" + minutes;
    
    // Setting seconds
    if (seconds < 10)
        seconds = "0" + seconds;

    let clockTime = `${hours}:${minutes}:${seconds} ${meridian}`;

    clock.innerText = clockTime;
};
