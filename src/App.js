import './App.css';
import { HomePage } from './components/HomePage';
import { Routes, Route } from 'react-router-dom'
//import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/:id" element={<GetCity/>} */}
        {/* <Route path="/all-cities" element={<GetCity />} /> */}
      </Routes>

    </div>
  );
}

export default App;
