import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Wapp.css';

function Wapp() {
    const apiKey = "7996effa26e916ad74de3bb79b2f14d7"; // Replace with your own API key
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(null);

    // Wrap cities in useMemo to avoid redefining on each render
    const cities = useMemo(() => ["Milano", "Roma", "Bologna", "Palermo", "Napoli", "Torino", "Firenze"], []);

    const clearWeatherCards = useCallback(() => {
        setWeatherData([]); // Clear the weather data state
        setError(null); // Clear any previous errors
    }, []);

    const getWeather = useCallback(async (selectedCity) => {
        clearWeatherCards();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData([data]); // Update the weather data state for a single city
        } catch (error) {
            setError('Failed to fetch weather data');
        }
    }, [apiKey, clearWeatherCards]);

    const getWeatherForAllCities = useCallback(async () => {
        clearWeatherCards();
        try {
            const promises = cities.map(city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=it&units=metric&appid=${apiKey}`));
            const results = await Promise.all(promises);
            const data = await Promise.all(results.map(result => result.json()));
            setWeatherData(data); // Update the weather data state with all cities' data
        } catch (error) {
            setError('Failed to fetch weather data');
        }
    }, [apiKey, clearWeatherCards, cities]);

    const getWeatherForAllCitiesSequentially = useCallback(async () => {
        clearWeatherCards();
        const data = [];
        try {
            for (const city of cities) {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=it&units=metric&appid=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const cityData = await response.json();
                data.push(cityData);
            }
            setWeatherData(data); // Update the weather data state with sequential data
        } catch (error) {
            setError('Failed to fetch weather data');
        }
    }, [apiKey, clearWeatherCards, cities]);

    useEffect(() => {
        const form = document.getElementById("city-form");
        form.addEventListener("submit", event => {
            event.preventDefault(); // Prevents form from refreshing page
            const selectedCity = document.getElementById("city-select").value;
            getWeather(selectedCity);
        });

        const allCitiesSyncButton = document.getElementById("all-cities-sync");
        allCitiesSyncButton.addEventListener("click", getWeatherForAllCities);

        const allCitiesButton = document.getElementById("all-cities");
        allCitiesButton.addEventListener("click", getWeatherForAllCitiesSequentially);

        // Clean up event listeners when component unmounts
        return () => {
            form.removeEventListener("submit", () => {});
            allCitiesSyncButton.removeEventListener("click", () => {});
            allCitiesButton.removeEventListener("click", () => {});
        };
    }, [getWeather, getWeatherForAllCities, getWeatherForAllCitiesSequentially]);

    return (
        <div className="container-fluid animated-gradient py-5">
            <h1 className="title text-center mb-5">IWWA</h1>
            <h2 className="title text-center mb-5">Italian Worst Weather App</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className="title">Display one city</h3>
                    <form id="city-form">
                        <div className="form-group mb-3">
                            <select id="city-select" className="form-select">
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" id="display-button" className="btn btn-primary">Display</button>
                    </form>
                </div>
                <div className="col-md-6 offset-md-3">
                    <h3 className="title mt-3">Display Cities using Promise.all</h3>
                    <button id="all-cities-sync" className="btn btn-primary mt-1 mb-3">Display all #1</button>
                    <h3 className="title mt-3">Display Cities one by one</h3>
                    <button id="all-cities" className="btn btn-primary mt-1 mb-3">Display all #2</button>
                </div>
            </div>
            <div className="row mt-5">
                <div id="weather-cards" className="col-md-12 d-flex justify-content-center flex-wrap">
                    {error && <p>{error}</p>}
                    {weatherData.length > 0 && weatherData.map((cityData, index) => (
                        <div className="card m-2" key={index}>
                            <h5 className="card-title">{cityData.name}</h5>
                            <p className="card-text">Temperature: {cityData.main.temp} °C</p>
                            <p className="card-text">Weather: {cityData.weather[0].description}</p>
                            <p className="card-text">Humidity: {cityData.main.humidity} %</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wapp;