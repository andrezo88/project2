import './App.css';
import { HomePage } from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import { CityDetails } from "./components/City/DetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorPage } from './components/ErrorPage';
import { FavoriteCities } from './components/City/FavoriteCities';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city-details/:id" element={<CityDetails />} />
        <Route path="/city-details/*" element={<ErrorPage />} />
        <Route path="/favorite-cities/:id" element={<FavoriteCities />} />
      </Routes>

    </div>
  );
}

export default App;
