const button= document.getElementById('search-button'); // Getting reference to the search button
const input = document.getElementById('input-city'); // Getting reference to the input field
const cityName = document.getElementById('city-name') // Getting reference to the element where city name will be displayed
const cityTime = document.getElementById('city-time') // Getting reference to the element where local time will be displayed
const cityTemp = document.getElementById('city-temp') // Getting reference to the element where city temperature will be displayed

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=aca36965e2dc42a6bcd112928240304&q=${cityName}&aqi=yes`
    ); // Fetching weather data from Weather API based on the city name
    return await promise.json(); // Returning the JSON response from the API
}

button.addEventListener('click', async () => {
    const value = input.value; // Getting the value entered by the user in the input field
    const result = await getData(value); // Fetching weather data based on the entered city name
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}` // Displaying the city name, region, and country
    cityTime.innerText = `${result.location.localtime}` // Displaying the local time of the city
    cityTemp.innerText = `${result.current.temp_c}` // Displaying the temperature of the city in Celsius
});


