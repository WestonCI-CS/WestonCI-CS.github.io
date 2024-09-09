import "../styles/about.css";
import FadeIn from "../vfx/FadeIn";

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
            <div className="bullet-points">
                <div className="point">
                    <h3 className="tetiary-title">Active Community</h3>
                    <h4 className="point-body">
                        We have an active discord server if you're 
                        interested in joining or want to hangout!
                    </h4>
                    <a className="link" href="https://discord.gg/mtv9s3HMNb">
                        Join our Discord<span> →</span>
                    </a>
                </div>
                <div className="point">
                    <h3 className="tetiary-title">Events and Resources</h3>
                    <h4 className="point-body">
                        Get the latest on news and event through our
                        Google Classroom.
                    </h4>
                    <a className="link" href="https://classroom.google.com/c/NjYwNzkwMzgwMjU1?cjc=wchzva2">
                        Join our Google Classroom<span> →</span>
                    </a>
                </div>
                <div className="point">
                    <h3 className="tetiary-title">Projects</h3>
                    <h4 className="point-body">
                        Check out our latest student-led projects. Contribute or
                        test them out!
                    </h4>
                    <a className="link" href="/projects">
                        Go to Projects<span> →</span>
                    </a>
                </div>
            </div>
            </FadeIn>

            <FadeIn>
            <h4 className="join-body">
                Interested in joining our club? Sign up today and 
                become a part of our community!
            </h4>
                <button className="enlarge primary-button">JOIN NOW</button>
            </FadeIn>
        </div>
    );
};