const secondHand = document.querySelector('.seconds');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsFraction = seconds/60;
    const minutesFraction = (secondsFraction+mins)/60;
    const hoursFraction = (minutesFraction+hour)/12;

    const secondsRotate=secondsFraction*360;
    const hoursRotate=hoursFraction*360;
    const minutesRotate=minutesFraction*360;

    secondHand.style.transform=`rotate(${secondsRotate}deg)`;
    minsHand.style.transform=`rotate(${minutesRotate}deg)`;
    hourHand.style.transform=`rotate(${hoursRotate}deg)`;
}
setInterval(setDate, 1000);

setDate();