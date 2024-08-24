import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"; 
import "../styles/home.css";

export default function Home(){
    return (
        <div>
            <Container>
                <h1 className="welcome">WELCOME TO WCI COMPUTER SCIENCE CLUB</h1> 
                <h2>We are a group of Weston Students who work together on Coding projects!</h2> 
                <button className="join-button" onclick="window.location.href='https://hackclub.com/';">JOIN OUR CLUB!</button>
            </Container>
        </div>
    );
}