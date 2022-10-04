import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  // 4034c7f0309b4a5cbad143313220310  weather APi {both diffent api use ONE with different api carefully}
  // 80503d0b1d540e11368aa5ab4096d1f8 openWeather APi
  const [data, setData] = useState({});

  const [City, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=80503d0b1d540e11368aa5ab4096d1f8`;
  const searchCity = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
  };

  return (
    <section className="app">
      <div className="search">
        <input
        placeholder="Search City"
          type="text"
          onChange={(event) => setCity(event.target.value)}
          onKeyPress={searchCity}
        />


      </div>
      <div className="container">
        <div className="top">
          <div className="loction">
          <h5>{data.sys?.country}</h5>
        <h3>{data.name}</h3>
       
          </div>
          <div className="temp">
           {data.main?<h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ?  <h3>{data.weather[0].main}</h3> : null}
          </div>
        </div>
        {data.main?   <div className="bottom">
          <div className="feels">
            <p>{data.main?.feels_like}</p>
            <p>Feeks like</p>
          </div>
          <div className="humidity">
            <p>{data.main?.humidity}</p>
            <p>humidity</p>
          </div>
          <div className="Winds">
            <p>{data.wind?.speed}</p>
            <p>Winds speed</p>
          </div>
        </div> : null}
      
      </div>
    </section>
  );
};

export default App;
