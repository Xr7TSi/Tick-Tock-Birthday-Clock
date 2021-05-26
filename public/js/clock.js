const timeLeft = document.getElementById('time-left')
console.log('testing')
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff =
  now -
  start +
  (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
var oneDay = 1000 * 60 * 60 * 24;
var day1 = Math.floor(diff / oneDay);
console.log("Day of year: " + day1);

// need to link this up to user input
// const birthday = document.getElementById("birthday-signup").value;
// const birthday = 07/30/1993
const dashBirthday = document.getElementById('dashBirthday');
console.log(dashBirthday)
const dataID = dashBirthday.getAttribute("data-id");
console.log(dataID)


// times
const second = 1000 // milli sec
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerID
function countDown() {
  
    const today = new Date("2021/12/4");
    const today1 = today.getDate()
    const timeSpan = dataID - today
    console.log(today1)
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % days) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);
    if (day1 === day) {
        timeLeft.innerHTML = "Happy birthday!!"
        clearInterval(timerID)
        // return countDown();
       return timerID = setInterval(countDown, second);
        
    }
    if (day1 !== day) {
        timeLeft.innerHTML = "No birthday!!"
        clearInterval(timerID)
        return
    }
// rounds times down
   

    timeLeft.innerHTML = days + 'days' + hours +'hours' + minutes + 'minutes' + seconds +'seconds'
}
 
timerID = setInterval(countDown, second)