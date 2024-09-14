import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function BackgroundHandler({ children }) {
    const [bg, setBG] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
        if (location.pathname === "/") return setBG(true);
        setBG(false);
    }, [location]);
  
    return <div className={bg ? "background" : ""}>{children}</div>;
}