import React, {useState, useEffect} from "react";
import { useRef } from "react";
function Weather(){
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState(null);
    const cityRef = useRef(null);

    const API_ENDPOINT = `http://localhost:3000/Weather?q=${cityRef.current}`;

    const fetchWeather = async() => {
        setLoading(true);
        //setError(null);
        try{
            const response = await fetch(API_ENDPOINT);
            if(response.status === 200){
                response.json().then((res) => {
                    setWeather(res);
                });
            }else{
                setError("City not found");
            }
        }
        catch(error){
            setError("An error occurred while fetching data");
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(() => {
       if(city){
        fetchWeather();
       }
    },[])

    return (
        <div>
            <h1>Weather App</h1>
            <input
              type="text"
              ref={cityRef}
              //value={city}
              //onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name or zip code" 
            />
            <button onClick={fetchWeather}>Get Weather</button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weather && (
                <div>
                <h2>Weather in {city}</h2>
                <p>{weather[0].temperature}</p>
                <p>{weather[0].condition}</p>
                </div>
           )}
            
        </div>
    )
}
export default Weather;