import "../styles/about.css";
import FadeIn from "../vfx/FadeIn";
import TriplePoint from "../components/TriplePoint";

export default function About(){


    return (
        <div>
            <FadeIn>
                <h1 className="section-title">About Us</h1>
                <h2 className="section-subtitle">
                    Weston Collegiate Institute's Hub for Youth-led Technological Innovation
                </h2>
                <p className="text-body">
                    We're a vibrant community of students passionate about technology
                    and innovation. Our club provides a dynamic environment to explore
                    coding, computing, and emerging technologies, helping members 
                    enhance their skills and collaborate on exciting projects.
                </p>
            </FadeIn>

            <div className="secondary-section">
                <FadeIn>
                    <h1 className="section-title mission">Our Mission</h1>
                    <h2 className="section-subtitle mission">
                        Creating an Era of Innovation
                    </h2>
                    <p className="mission text-body">
                        Every one of us has the innate potential to create something
                        incredible. We at the Computer Science Club work towards 
                        fostering that potential, providing a platform for students
                        to explore their interests and develop their skills.
                    </p>
                </FadeIn>
            </div>

            <FadeIn>
            <h2 className="section-subtitle learn-more">Learn more about us</h2>
            <div className="triple-points">
                <TriplePoint 
                    title="Active Community"
                    body="We have an active discord server if you're interested in joining or want to hangout!"
                    link="https://discord.gg/mtv9s3HMNb"
                    linkText="Join our Discord"
                />
                <TriplePoint 
                    title="Events and Resources"
                    body="Get the latest on news and event through our Google Classroom."
                    link="https://classroom.google.com/c/NjYwNzkwMzgwMjU1?cjc=wchzva2"
                    linkText="Join our Google Classroom"
                />
                <TriplePoint 
                    title="Projects"
                    body="Check out our latest student-led projects. Contribute or test them out!"
                    link="/projects"
                    linkText="Go to Projects"
                />
            </div>
            </FadeIn>

            <FadeIn>
            <h4 className="join-body">
                Interested in joining our club? Sign up today and 
                become a part of our community!
            </h4>
                <a href="https://forms.gle/P2XMST37cT7YKsVK7">
                    <button className="enlarge primary-button">JOIN NOW</button>
                </a>
            </FadeIn>
        </div>
    );
};