import './App.css';
import { HomePage } from './components/HomePage';
import { Routes, Route } from "react-router-dom";
import { CityDetails } from "./components/City/DetailsPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city-details" element={<CityDetails/>} />
      </Routes>

    </div>
  );
}

export default App;
