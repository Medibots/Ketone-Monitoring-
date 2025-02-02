// Thingspeak API endpoint for reading data
const channelID = "2826677";  // Replace with your channel ID
const readAPIKey = "HJVEEOMSG62OMBPJ";  // Replace with your Read API Key

// API URL to fetch data
const apiURL = `https://api.thingspeak.com/channels/${2826677}/fields/1.json?api_key=${HJVEEOMSG62OMBPJ}&results=1`;

function fetchData() {
    // Fetch the latest data from Thingspeak
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const fieldValue = data.feeds[0].field1;  // Field 1 holds the ketone data
            const lastEntryTime = data.feeds[0].created_at;

            // Update the webpage with the fetched data
            document.getElementById("level").textContent = fieldValue + " ppm";  // Display ketone level
            document.getElementById("updateTime").textContent = lastEntryTime;  // Display the last update time
        })
        .catch(error => {
            console.error('Initializing..:', error);
            document.getElementById("level").textContent = "EInitializing..";
        });
}

// Fetch the data every 10 seconds
setInterval(fetchData, 10000);

// Initial data fetch
fetchData();
