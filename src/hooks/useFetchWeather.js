import { useState, useEffect } from "react";
import axios from "axios";

const useFetchWeather = (city) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
                );
                setWeatherData(response.data);
                setError(null);
            } catch (err) {
                setError("Failed to fetch weather data");
            } finally {
                setLoading(false);
            }
        };

        if (city) fetchWeather();
    }, [city]);

    return { weatherData, loading, error };
};

export default useFetchWeather;
