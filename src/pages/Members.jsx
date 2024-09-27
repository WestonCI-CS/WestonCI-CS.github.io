import FadeIn from "../vfx/FadeIn";
import MemberCard from "../components/MemberCard";
import members from "../json/members.json";

export default function Members(){
    const memberData = members.map(member => (
        <MemberCard
            image={getPFP(member.image)}
            alt={member.alt}
            name={member.name}
            style={{backgroundImage: `linear-gradient(120deg, ${member.gradientStart} 0%, ${member.gradientEnd} 100%)`}}
            role={member.role}
            link={member.link}
        />
    ));

    return(
        <div>
            <FadeIn>
                <h1 className="section-title">Members</h1>
                <h2 className="section-subtitle">
                    Weston CI's Brightest Minds in Technology and Innovation.
                </h2>
                <p className="text-body">The coolest people you'll ever meet.</p>
            </FadeIn>
            <div className="secondary-section">
                {memberData}
            </div>
        </div>
    );
}

const getPFP = (file) => {
    return require(`../assets/images/pfp/${file}`);
}