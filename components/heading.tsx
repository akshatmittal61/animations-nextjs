import React, { useRef, useEffect, useState } from "react";
import "velocity-animate";
import "velocity-animate/velocity.ui";

const Heading = () => {
	const textRef = useRef(null);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrollPosition(scrollTop);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const textSize =
			128 + (scrollPosition / (window.innerHeight * 2)) * 100;
		(window as any).Velocity(textRef.current, "stop").velocity(
			{
				fontSize: `${textSize}px`,
			},
			{
				duration: 200,
				easing: "easeInOut",
			}
		);
	}, [scrollPosition]);

	return (
		<div
			ref={textRef}
			className="zoom-text"
			style={{
				fontSize: "128px",
				transition: "font-size 0.3s ease-in-out",
			}}
		>
			Scroll down to zoom
		</div>
	);
};

export default Heading;
