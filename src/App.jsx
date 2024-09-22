import './styles/App.css';
import './styles/scrollbar.css';
import './styles/fadeIn.css';
import Home from './pages/Home';
import Members from './pages/Members';
import Projects from './pages/Projects';
import About from './pages/About';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import BackgroundHandler from './components/BackgroundHandler';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
    return (
      <Router>
        <div className="App">
          <BackgroundHandler>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="members" element={<Members />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </BackgroundHandler>
          <Footer />
        </div>
      </Router>
    );
}

