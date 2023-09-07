// script.js
function updateNigerianTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const nigeriaTimeOffset = 1; // UTC+1 for Nigerian Time
    const currentDate = new Date();
    
    // Adjust the time by adding the offset in hours
    currentDate.setUTCHours(currentDate.getUTCHours() + nigeriaTimeOffset);
    
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentNigerianTime = currentDate.toISOString().substr(11, 8);

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Day of the Week: ${currentDay}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `UTC Time: ${currentNigerianTime}`;
}

// Update Nigerian time every second
setInterval(updateNigerianTime, 1000);

// Initial update
updateNigerianTime();
