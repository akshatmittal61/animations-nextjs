import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Heading = () => {
	const controls = useAnimation();
	const fullStopRef = useRef<HTMLSpanElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = scrollTop / maxScroll;
			setScrollProgress(progress);
			controls.start({
				fontSize: `${128 + Math.pow(progress, 0.6) * 10000}px`,
				transformOrigin: "right",
				translateX:
					(window.scrollY * 100) / window.innerHeight < 65
						? `-${50 + Math.pow(progress, 0.4) * 50}%`
						: `-${50 + Math.pow(650 / maxScroll, 0.4) * 50}%`,
				translateY:
					(window.scrollY * 100) / window.innerHeight < 65
						? `-${50 + progress * 60}%`
						: `-${50 + (650 / maxScroll) * 60}%`,
				opacity:
					-((window.scrollY / window.innerHeight) * 100) / 200 + 1,
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [controls]);
	return (
		<div
            className="w-full min-w-screen sticky top-0 left-0 h-screen text-nowrap z-10 select-none"
		>
			<motion.h1
				animate={controls}
				transition={{ duration: 0 }}
				className="text-right"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					fontSize: "128px", // Initial font size,
					fontWeight: "800",
					transformOrigin: "right",
				}}
			>
				<span className="hero-1">Data</span>
				<span className="hero-2">Magic</span>
				<motion.span className="hero-3" ref={fullStopRef}>
					.
				</motion.span>
			</motion.h1>
		</div>
	);
};

export default Heading;
