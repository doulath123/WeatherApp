import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./Weather.css"


function Weather() {
  var b1,b2,b3,b4,b5;
  var today=new Date().getDay()
  if(today==6)
  {
    b1=0;
  }
  else{
    b1=today+1
  }

  if(b1==6)
  {
    b2=0
  }
  else{
    b2=b1+1
  }

  if(b2==6)
  {
    b3=0
  }
  else{
    b3=b2+1
  } 
  
  if(b3==6)
  {
    b4=0
  }
  else{
    b4=b3+1
  } 
  
  if(b4==6)
  {
    b5=0
  }
  else{
    b5=b4+1
  }
  console.log(typeof(new Date()))
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const toDate = (e) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'Nocvember',
      'December',
    ];
    const days = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ];
    const currentDate = new Date();
    if(e!=undefined)
    {
      var date = `${days[currentDate.getDay()+e]
      }`;
    }
    else{
      var date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      }`;
    }
   
    return date;
  };

  const search = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      setWeather({ ...weather, loading: true });
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const appid = '049a286bc9499619754eac4684c2454c';
      await axios
        .get(url, {
          params: {
            q: query,
            units: 'metric',
            appid: appid,
          },
        })
        .then((res) => {
          console.log(res)
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setQuery('');
          console.log('error', error);
        });
    }
  };

  return (
    <div className='body'>
      <h1 className="app-name">
        Weather App<span>🌤</span>
      </h1>
      <div className='weekdays'>
      
      
      
     <div className='daybox'>
         {weather && weather.data && weather.data.main && (
         <div>
         
         <div>
           <span>{toDate(b1)}</span>
         </div>
         <div>
           <img
             src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
             alt={weather.data.weather[0].description}
           />
          
           {Math.round(weather.data.main.temp)+1}
           <sup>&deg;C</sup>
         </div>
         <div>
           <p>{weather.data.weather[0].description.toUpperCase()}</p>
         </div>
       </div>
     )}</div>
     <div className='daybox'>
         {weather && weather.data && weather.data.main && (
         <div>
         
         <div>
           <span>{toDate(b2)}</span>
         </div>
         <div>
           <img
             src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
             alt={weather.data.weather[0].description}
           />
          
           {Math.round(weather.data.main.temp)+2}
           <sup>&deg;C</sup>
         </div>
         <div>
           <p>{weather.data.weather[0].description.toUpperCase()}</p>
         </div>
       </div>
     )}</div>
     <div className='daybox'>
         {weather && weather.data && weather.data.main && (
         <div>
         
         <div>
           <span>{toDate(b3)}</span>
         </div>
         <div>
           <img
             src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
             alt={weather.data.weather[0].description}
           />
          
           {Math.round(weather.data.main.temp)+1}
           <sup>&deg;C</sup>
         </div>
         <div>
           <p>{weather.data.weather[0].description.toUpperCase()}</p>
         </div>
       </div>
     )}</div>
     <div className='daybox'>
         {weather && weather.data && weather.data.main && (
         <div>
         
         <div>
           <span>{toDate(b4)}</span>
         </div>
         <div>
           <img
             src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
             alt={weather.data.weather[0].description}
           />
          
           {Math.round(weather.data.main.temp)+1}
           <sup>&deg;C</sup>
         </div>
         <div>
           <p>{weather.data.weather[0].description.toUpperCase()}</p>
         </div>
       </div>
     )}</div>
     <div className='daybox'>
         {weather && weather.data && weather.data.main && (
         <div>
         
         <div>
           <span>{toDate(b5)}</span>
         </div>
         <div>
           <img
             src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
             alt={weather.data.weather[0].description}
           />
          
           {Math.round(weather.data.main.temp)}
           <sup>&deg;C</sup>
         </div>
         <div>
           <p>{weather.data.weather[0].description.toUpperCase()}</p>
         </div>
       </div>
     )}</div>

      </div>
      <input
          type="text"
          className="city-search"
          placeholder="Search City.."
          name="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={search}
        />
      <div className='mainbox'>
        
     
      {weather.loading && (
      
          
          <p className='loading'>🔃</p>
          
        
      )}
      {weather.error && (
        <>
         
            <span style={{ 'font-size': '20px' }}> 😒 Sorry, City not found</span>
        </>
      )}

      {weather && weather.data && weather.data.main && (
        <div>
          <div className="city-name">
            <h2>
              {weather.data.name}, <span>{weather.data.sys.country}</span>
            </h2>
          </div>
          <div>
            <span>{toDate()}</span>
          </div>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div>
            <p>{weather.data.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weather.data.wind.speed}m/s</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}


export default Weather;