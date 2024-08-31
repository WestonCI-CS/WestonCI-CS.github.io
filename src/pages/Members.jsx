import FadeIn from "../vfx/FadeIn";
import MemberCard from "../components/MemberCard";
import members from "../json/members.json";

export default function Members(){
    const memberData = members.map((member, index) => (
        <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            style={{backgroundImage: `linear-gradient(120deg, ${member.gradientStart} 0%, ${member.gradientEnd} 100%)`}}
            role={member.role}
            link={member.link}
        />
    ));

    return(
        <div>
            <FadeIn>
                <h1>Members</h1>
            </FadeIn>
            {memberData}
        </div>
    );
}
