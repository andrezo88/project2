import './App.css';
import { HomePage } from './components/HomePage';
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NavBar" element={<NavBar />} />
      </Routes>

    </div>
  );
}

export default App;
