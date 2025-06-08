import React from 'react'
import { useState, useEffect } from 'react'

// id, size, x, y, opacity, animationDuration


const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [Meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
    }
    }
    , []); 

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
            id: i,
            size: Math.random() * 3 + 1, // Random size between 1 and 3
            x: Math.random() * 100, // Random x position in percentage
            y: Math.random() * 100, // Random y position in percentage
            opacity: Math.random() * 0.5 + 0.5, // Random opacity
            animationDuration: Math.random() * 4 + 5 // Random duration between 4 and 2 seconds
        });

    }
    setStars(newStars);

    }

     const generateMeteors = () => {
        const numberOfMeteors = 4; // Fixed number of meteors

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
            id: i,
            size: Math.random() * 2 + 1, // Random size between 1 and 3
            x: Math.random() * 100, // Random x position in percentage
            y: Math.random() * 20, // Random y position in percentage
            opacity: Math.random() * 3 + 3, // Random opacity
            animationDuration: Math.random() * 3 + 3 // Random duration between 4 and 2 seconds
        });

    }
    setMeteors(newMeteors);

    }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map(star => (
            <div
                key={star.id}
                className="star animate-pulse-subtle" style={
                    {
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',  
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's'
                }}/>
        ))}
        {Meteors.map(Meteors => (
            <div
                key={Meteors.id}
                className="meteor animate-meteor" style={
                    {
                        width: Meteors.size * 50 +'px',
                        height: Meteors.size * 2 + 'px',
                         left: Meteors.x + '%',
                        top: Meteors.y + '%',  
                        animationDelay: Meteors.delay,
                        animationDuration: Meteors.animationDuration + 's'
                }}/>
        ))}
    </div>
  )
}


export default StarBackground
