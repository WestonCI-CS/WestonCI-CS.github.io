import "../styles/home.css";
import FadeIn from "../vfx/FadeIn";
import bg from "../assets/images/main/home-bg.png";

export default function Home(){
    return (
        <div>
            <img className="background" src={bg}/>
            <FadeIn>
                <h1 className="section-title">Welcome to the Computer Science Club</h1> 
                <p className="home section-subtitle">
                    We are a Team of High School Innovators Dedicated to Exploring the World of Technology
                </p> 
                <button className="front primary-button">ABOUT US</button>
            </FadeIn>
            <div className="secondary-section">
                hi
            </div>
        </div>
    );
}