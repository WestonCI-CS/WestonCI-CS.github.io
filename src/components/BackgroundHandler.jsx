import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * BackgroundHandler component that changes the background based on the current route.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the BackgroundHandler.
 *
 * @returns {JSX.Element} The rendered BackgroundHandler component.
 *
 * @example
 * <BackgroundHandler>
 *   <YourComponent />
 * </BackgroundHandler>
 */
export default function BackgroundHandler({ children }) {
    const [bg, setBG] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
        if (location.pathname === "/") return setBG(true);
        setBG(false);
    }, [location]);
  
    return <div 
        className={bg ? "background" : ""} 
        alt={bg ? "Computer monitor with JavaScript files open in a code editor." : ""}
        >
            {children}
        </div>;
}