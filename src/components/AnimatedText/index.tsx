import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
    children?: string;
    className?: string;
    duration?: number;
    stagger?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className, duration, stagger }) => {
    const text = children
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chars = containerRef.current?.querySelectorAll('.char');
        if (chars) {
            gsap.fromTo(chars, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: duration || 0.25,
                ease: 'power1.inOut',
                delay: 0,
                stagger: {
                    each: stagger || 0.03,
                    from: 'start'
                },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, [duration, stagger, text]);

    return (
        <div ref={containerRef} className={`${className} overflow-hidden`}>
            {text && text.split(' ').map((word, index) => (
                <span key={index} className="word inline-block">
                    {word.split('').map((char, charIndex) => (
                        <span key={charIndex} className="char inline-block">
                            {char}
                        </span>
                    ))}
                    {/* Add a space after each word, but don't animate the space */}
                    <span className="char inline-block">&nbsp;</span>
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;
