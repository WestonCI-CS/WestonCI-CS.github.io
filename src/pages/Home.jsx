import "../styles/home.css";

export default function Home(){
    return (
        <div>
            <h1 className="section-title">WELCOME TO WCI COMPUTER SCIENCE CLUB</h1> 
            <p className="home section-subtitle">We are a group of Weston Students who work together on Coding projects!</p> 
            <button className="front join-button" onclick="window.location.href='https://hackclub.com/';">JOIN OUR CLUB!</button>
        </div>
    );
}