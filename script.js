const timeEl = document.getElementById("currentDayOfTheWeek")
const dayEl = document.getElementById("time")

const date = new Date() // create new Date Object 
const currentDay = date.getDay() // get current day 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // array list of days of the week 
const nameOfCurrentDay = daysOfWeek[currentDay] // get the exact day from the "daysOFWeek" array 
currentDayOfTheWeek.textContent = " " +   nameOfCurrentDay // display in html 
const timeUTCInMilliseconds = date.getTime() // get time in milliseconds 
time.textContent = " " +  timeUTCInMilliseconds