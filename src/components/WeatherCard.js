import React from "react";

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return <div>Loading...</div>;

    return (
        <div className="weather-card">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Weather Icon"
            />
        </div>
    );
};

export default WeatherCard;
