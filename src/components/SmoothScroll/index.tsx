import React, { useEffect, useRef, useState } from "react";

interface SmoothScrollProps {
	children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	const [scrollY, setScrollY] = useState<number>(0);
	const [targetY, setTargetY] = useState<number>(0);
	const [isScrolling, setIsScrolling] = useState<boolean>(false);

	// Function to update the scroll position
	const updateScrollPosition = () => {
		if (!scrollContainerRef.current) return;

		// Calculate the new scroll position with a linear interpolation for smooth effect
		const diff = targetY - scrollY;
		const newY = scrollY + diff * 0.1; // Adjust the factor to control smoothness

		if (Math.abs(diff) < 0.5) {
			setScrollY(targetY);
			setIsScrolling(false);
			return;
		}

		setScrollY(newY);
		scrollContainerRef.current.style.transform = `translateY(${-newY}px)`;
		requestAnimationFrame(updateScrollPosition);
	};

	const handleScroll = () => {
		if (!scrollContainerRef.current) return;
		const newTargetY = window.scrollY;
		setTargetY(newTargetY);

		if (!isScrolling) {
			setIsScrolling(true);
			requestAnimationFrame(updateScrollPosition);
		}
	};

	// Attach scroll event listener on mount
	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY, targetY, isScrolling]);

	return (
		<div
			ref={scrollContainerRef}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				willChange: "transform",
				transform: `translateY(${-scrollY}px)`
			}}
		>
			{children}
		</div>
	);
};

export default SmoothScroll;
