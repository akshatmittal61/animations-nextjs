import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const OpacitySection = () => {
	const controls = useAnimation();
	const [scrollOpacity, setScrollOpacity] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const opacity =
				(window.scrollY * 100) / window.innerHeight < 100
					? 0
					: window.scrollY / window.innerHeight - 1;

			setScrollOpacity(opacity);

			controls.start({ opacity });
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [controls]);

	return (
		<motion.section
			className="pc w-full h-screen fixed top-0 left-0 bg-gray-100"
			style={{
				opacity: scrollOpacity,
			}}
		/>
	);
};

export default OpacitySection;
