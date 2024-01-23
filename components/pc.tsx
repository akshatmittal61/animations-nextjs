import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const OpacitySection = () => {
	const controls = useAnimation();
	const [scrollOpacity, setScrollOpacity] = useState(0);
	const [position, setPosition] = useState<any>({
		mode: "fixed",
	});

	useEffect(() => {
		const handleScroll = () => {
			const opacity =
				(window.scrollY * 100) / window.innerHeight < 100
					? 0
					: window.scrollY / window.innerHeight - 1;
			setScrollOpacity(opacity);
			console.log(window.scrollY / window.innerHeight);
			const mode =
				(window.scrollY * 100) / window.innerHeight < 200
					? "fixed"
					: "relative";
			controls.start({
				opacity: opacity,
			});
			setPosition({
				mode: mode,
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [controls]);

	return (
		<>
			<motion.section
				className="pc w-full h-screen fixed top-0 left-0 bg-gray-100 z-50"
				style={{
					opacity: scrollOpacity,
					position: position.mode,
					transform:
						position.mode === "fixed"
							? "translateY(0)"
							: "translateY(100%)",
				}}
			/>
			<div
				style={{ marginTop: position.mode === "fixed" ? "200vh" : "100vh" }}
			/>
		</>
	);
};

export default OpacitySection;
