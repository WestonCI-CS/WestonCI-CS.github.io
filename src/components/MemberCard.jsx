import "../styles/memberCard.css";
import FadeIn from "../vfx/FadeIn";

export default function MemberCard({link, style, image, name, role}){
    return(
        <FadeIn>
            <a href={link}>
                <div className="card" style={style}>
                    <img 
                        src={image} 
                        alt={name} 
                        className="card-image" 
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