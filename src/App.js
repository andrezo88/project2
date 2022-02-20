import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

import { HomePage } from './components/HomePage';
import { CityDetails } from "./components/City/DetailsPage";
import { ErrorPage } from './components/ErrorPage';
import { WeatherDetails } from "./components/City/WeatherDetails";
import { WaveDetails } from "./components/City/WaveDetails";

function App() {

  return (
    <div className="App">

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        
        <Route path="/city-details/:id" element={<CityDetails />} />
        <Route path="/city-details/*" element={<ErrorPage />} />
        
        <Route path="/weather-details/:id" element={<WeatherDetails />} />
        <Route path="/weather-details/*" element={<ErrorPage />} />

        <Route path="/wave-details/:id" element={<WaveDetails />} />
        <Route path="/wave-details/*" element={<ErrorPage />} />

      </Routes>

    </div>
  );

}

export default App;
