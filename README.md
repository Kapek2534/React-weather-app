# React Weather App

## Project Description

This is a desktop weather application built based on a challenge from [Frontend Mentor](https://www.frontendmentor.io/).  
The app allows users to search for the current weather in any city, view the hourly forecast, and see the daily forecast for upcoming days.

The project is hosted on **GitHub Pages**

## Features

- Search for a city using the SearchBar
- Display current temperature, date, and city
- Hourly weather forecast
- Daily weather forecast
- Weather icons based on the weather code from Open-Meteo API
- Skeleton/placeholder while data is loading

## Technologies

- **React**
- **Vite**
- **CSS Modules**
- **JavaScript (ES6+)**
- **Open-Meteo API** for weather data

## How Search Works

1. User enters a city name in the SearchBar.

2. Clicking the search button triggers the useWeather hook.

3. The hook fetches the city's coordinates from the geocoding API, then retrieves the weather data from the forecast API.

4. Data is passed to the CurrentWeather, HourlyForecastList, WeatherDetails and DailyForecastList components and displayed on the screen.

## Future Improvements

- Auto-detect user location
- Light/dark mode toggle
- Mobile and tablet optimization
- Change of degree units

## Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/Kapek2534/React-weather-app.git
cd React-weather-app
```

2. Install dependecies:

```bash
npm install
```

3. Run the app:

```bash
npm run dev
```

4. Open the browser via URL provided by Vite

## License

This project was built as a Frontend Mentor challenge – for educational purposes only.
