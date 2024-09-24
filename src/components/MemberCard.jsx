import "../styles/memberCard.css";
import FadeIn from "../vfx/FadeIn";
import { useState } from "react";

/**
 * MemberCard component displays a card with member information.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.link - URL to navigate when the card is clicked.
 * @param {Object} props.style - Inline styles for the card.
 * @param {string} props.image - URL of the member's image.
 * @param {string} props.name - Name of the member.
 * @param {string} props.alt - Alt text for the member's image.
 * @param {string} props.role - Role of the member.
 * @returns {JSX.Element} A card component displaying member information.
 */
export default function MemberCard({link, style, image, name, alt, role}){
    const [isLoaded, setIsLoaded] = useState(false);

    return(
        <FadeIn>
            <a href={link}>
                <div className="card" style={style}>
                    {!isLoaded && <div className="placeholder card-image"/>}
                    <img 
                        src={image} 
                        alt={alt} 
                        loading="lazy"
                        className="card-image" 
                        onLoad={() => setIsLoaded(true)}
                    />
                    <div className="card-content">
                        <h2 className="card-name">{name}</h2>
                        <h3 className="card-role">{role}</h3>
                    </div>
                </div>
            </a>
        </FadeIn>
    );
}