import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Members from './components/Members';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="members" element={<Members />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
