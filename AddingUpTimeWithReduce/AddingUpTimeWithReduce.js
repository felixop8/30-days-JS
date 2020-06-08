const videos = Array.from(document.querySelectorAll('li'));

const totaltime = videos.reduce((accumulator, value) => {
    const [min, sec] = value.dataset.time.split(':').map(parseFloat);
    return { min: accumulator.min + min, sec: accumulator.sec + sec }
}, {min: 0, sec: 0});

let totalSeconds = totaltime.sec % 60,
    totalMinutes = (totaltime.min + Math.floor(totaltime.sec / 60)) % 60,
    totalHours =  Math.floor(totaltime.min / 60)

console.log({hours: totalHours, minutes: totalMinutes, seconds: totalSeconds});



