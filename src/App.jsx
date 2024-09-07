import logo from './logo.svg';
import './App.css';
import './styles/scrollbar.css';
import "./styles/fadeIn.css";
import Home from './pages/Home';
import Members from './pages/Members';
import About from './pages/About';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="members" element={<Members />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
