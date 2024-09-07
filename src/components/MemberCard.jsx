import "../styles/memberCard.css";
import FadeIn from "../vfx/FadeIn";

export default function MemberCard(props){
    return(
        <FadeIn>
            <a href={props.link}>
                <div className="card" style={props.style}>
                    <img 
                        src={props.image} 
                        alt={props.name} 
                        className="card-image" 
                    />
                    <div className="card-content">
                        <h2 className="card-name">{props.name}</h2>
                        <h3 className="card-role">{props.role}</h3>
                    </div>
                </div>
            </a>
        </FadeIn>
    );
}