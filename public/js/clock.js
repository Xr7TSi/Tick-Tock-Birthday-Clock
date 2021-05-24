const timeLeft = document.getElementById('time-left')
console.log("testing")

// need to link this up to user input
const birthday = new Date ('07/30/2021')


// times
const second = 1000 // milli sec
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerID
function countDown() {
    const today = new Date();
    const timeSpan = birthday - today
    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Birthday party is over!"
        clearInterval(timerID)
        return  
        
    }
    if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy birthday!"
        clearInterval(timerID)
        return
    }
// rounds times down
    const days = Math.floor (timeSpan / day)
    const hours = Math.floor ((timeSpan % days) / hour) 
    const minutes = Math.floor ((timeSpan % hour) / minute)
    const seconds = Math.floor ((timeSpan% minute)/ second)

    timeLeft.innerHTML = days + 'days' + hours +'hours' + minutes + 'minutes' + seconds +'seconds'
}
 
timerID = setInterval(countDown, second)