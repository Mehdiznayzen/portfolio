'use client';

import { useEffect, useState } from "react"

const LineWidth = () => {
    const [width, setWidth] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollWidth = (scrollTop / windowHeight) * 100;
            setWidth(scrollWidth);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className="fixed top-0 left-0 h-2 rounded-lg bg-purple z-50" 
            style={{ width: `${width}%` }}
        />
    )
}

export default LineWidth