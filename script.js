const desiredTime = new Date();
desiredTime.setUTCHours(8);
desiredTime.setUTCMinutes(15);
desiredTime.setUTCSeconds(0);

const timestamp = desiredTime.getTime();

const timeElement = document.getElementById("time");
timeElement.innerHTML = timestamp.toString();

console.log(timestamp);






// function updateUTCTime() {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const currentDate = new Date();
//     const currentDay = daysOfWeek[currentDate.getUTCDay()];
//     const currentUTCTime = currentDate.toISOString().substr(11, 8);

//     document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day of the Week: ${currentDay}`;
//     document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC Time: ${currentUTCTime}`;
// }

// // Update UTC time every second
// setInterval(updateUTCTime, 1000);

// updateUTCTime();
