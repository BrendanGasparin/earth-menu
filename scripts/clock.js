function textClock() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const clock = document.querySelector('#clock');
    let string;

    switch(dayOfWeek) {
        case 0:
            string = 'Sunday';
            break;
        case 1:
            string = 'Monday';
            break;
        case 2:
            string = 'Tuesday';
            break;
        case 3:
            string = 'Wednesday';
            break;
        case 4:
            string = 'Thursday';
            break;
        case 5:
            string = 'Friday';
            break;
        case 6:
            string = 'Saturday';
            break;
        default:
            string = 'dayOfWeekError';
    }

    string += ' ' + padZeros(currentDate.getFullYear(), 4) + '-' + padZeros((currentDate.getMonth() + 1), 2) + '-' + padZeros(currentDate.getDate(), 2);
    string += ' ' + padZeros(currentDate.getHours(), 2) + ":" + padZeros(currentDate.getMinutes(), 2) + ":" + padZeros(currentDate.getSeconds(), 2);

    clock.textContent = string;
}

function padZeros(num, size) {
    num = num.toString();
    while (num.length < size) {
        num = "0" + num;
    }
    return num;
}

function setupClock() {
    setInterval(textClock, 1000);
}

document.addEventListener('DOMContentLoaded', setupClock);