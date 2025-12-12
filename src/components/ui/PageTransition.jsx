'use client';
import { useState, useEffect } from 'react';

export default function PageTransition({ children, className = "" }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
            {children}
        </div>
    );
}
