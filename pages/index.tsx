import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const HomePage: React.FC = () => {
	const controls = useAnimation();
	const fullStopRef = useRef<HTMLSpanElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			// Calculate the scroll progress
			const scrollTop = window.scrollY;
			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = scrollTop / maxScroll;

			// Update the scroll progress state
			setScrollProgress(progress);

			// Animate the heading size
			/* controls.start({
				fontSize: `${128 + progress * 1000}px`,
			}); */
			controls.start({
				fontSize: `${128 + Math.pow(progress, 0.6) * 10000}px`,
				// translateX: "-50%",
				transformOrigin: "right",
				translateX: `-${50 + Math.pow(progress, 0.4) * 50}%`,
				/* translateY:
					window.scrollY > window.innerHeight
						? `-${50 + progress * 50}%`
						: "-50%", */
				translateY: `-${50 + progress * 60}%`,
				// opacity should change from 1 to 0, from scroll 0 to 200vh
				opacity:
					-((window.scrollY / window.innerHeight) * 100) / 200 + 1,
			});
		};

		// Attach the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [controls]);

	return (
		<main
			className="w-full h-screen bg-gray-100"
			style={{ height: "600vh" }}
		>
			{/* <section className="hero w-full h-screen text-9xl flex justify-center items-center">
				<motion.span className="hero-1">Data</motion.span>
				<motion.span className="hero-2">Magic</motion.span>
				<motion.span className="hero-3">.</motion.span>
			</section> */}
			<div className="w-full min-w-screen sticky top-0 left-0 h-screen text-nowrap">
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
			<div style={{ marginTop: "100vh" }} />
			<section className="pc w-full h-screen" />
			<section className="content w-full h-screen flex justify-between items-center flex-col">
				<Image src="/dots.svg" alt="dots" width={1920} height={1080} />
				<h1 className="text-6xl text-center">
					Capable of Transforming your Data Journey.
				</h1>
				<div
					className="content-tiles relative z-10 w-full overflow-hidden h-36"
					style={{ perspective: "18rem" }}
				>
					<div className="absolute z-[11] h-full w-full" />
					<div
						className="relative h-[200%] w-full animate-tiles"
						style={{
							backgroundSize: "90px 70px",
							backgroundRepeat: "repeat",
							backgroundImage:
								"linear-gradient(90deg, rgba(0, 0, 0, 0.3) 1px, transparent 0px), linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0px)",
							transformOrigin: "100% 0px 0px",
						}}
					></div>
				</div>
			</section>
		</main>
	);
};

export default HomePage;
