/* import "bootstrap/dist/css/bootstrap.min.css"; */

import { Routes, Route } from "react-router-dom";

import { HomePage } from './components/HomePage';
import { CityDetails } from "./components/City/DetailsPage";
import { ErrorPage } from "../src/components/City/ErrorPage";
import { FavoriteCities } from './components/City/FavoriteCities';
import { WeatherDetails } from "./components/City/WeatherDetails";
import { WaveDetails } from "./components/City/WaveDetails";
import { AboutPage } from "./components/AboutPage";

function App() {

  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/city-details/:id" element={<CityDetails />} />

        <Route path="/favorite-cities/:id" element={<FavoriteCities />} />
        <Route path="/weather-details/:id" element={<WeatherDetails />} />

        <Route path="/wave-details/:id" element={<WaveDetails />} />
        <Route path="/wave-details/*" element={<ErrorPage />} />

        <Route path="/about" element={<AboutPage />} />


      </Routes >

    </div >
  );

}

export default App;
