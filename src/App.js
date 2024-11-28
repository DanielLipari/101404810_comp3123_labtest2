import React, { useState } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import useFetchWeather from "./hooks/useFetchWeather";
import "./styles/WeatherApp.css";

const App = () => {
    const [city, setCity] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const { weatherData, loading, error } = useFetchWeather(searchCity);

    const handleSearch = () => {
        setSearchCity(city);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="App">
            <Header />
            <div className="search">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="results">
                {error && <p className="error">{error}</p>}
                {!error && weatherData && <WeatherCard weatherData={weatherData} />}
            </div>
        </div>
    );
};

export default App;
