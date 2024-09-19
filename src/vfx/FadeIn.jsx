import { useEffect, useState, useRef } from "react";

/**
 * FadeIn component that uses Intersection Observer API to add a fade-in effect
 * when the component becomes visible in the viewport.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the component.
 * @returns {JSX.Element} A div element that wraps the children with a fade-in effect.
 */
export default function FadeIn(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => 
            entries.forEach(entry => {
                if(!entry.isIntersecting) return;
                setVisible(true);
            })
        );
            const { current } = domRef;
            observer.observe(current);

            return () => observer.unobserve(current);
    }, []);
    
    return (
        <div
            className={`fade-in ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}