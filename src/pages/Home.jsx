import "../styles/home.css";
import FadeIn from "../vfx/FadeIn";
import HoverTypeWriter from "../components/HoverTypeWriter";
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/about');
    };

    return (
        <div className="home-main">
            <FadeIn>
                <h1 className="home section-title">Welcome to the Computer Science Club</h1> 
                <p className="enlarge home section-subtitle">
                    <HoverTypeWriter 
                        defaultText="Discover. Create. Innovate."
                        newText="We are a Team of High School Developers Dedicated to Exploring the World of Technology"
                    />
                </p> 
                <button className="enlarge front primary-button" onClick={handleButtonClick}>ABOUT US</button>
            </FadeIn>
        </div>
    );
}