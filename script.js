function updateDayAndTime() {
    const currentDayOfTheWeekElement = document.getElementById("currentDayOfTheWeek");
    const currentTimeElement = document.getElementById("time");

    // Get the current UTC time
    const currentUtcTime = new Date().toUTCString();

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[new Date().getUTCDay()];

    // Update the elements with the current values
    currentDayOfTheWeekElement.textContent = currentDayOfWeek;
    currentTimeElement.textContent = currentUtcTime.slice(17, -7); // Extract and display only the time part
}

// Call the function to update the day and time initially
updateDayAndTime();

// Update the day and time every second
setInterval(updateDayAndTime, 1000);