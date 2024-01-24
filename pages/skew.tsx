import Image from "next/image";
import React, { useEffect, useState } from "react";

const SkewPage: React.FC = () => {
	const [y, setY] = useState(0);
	const [deg, setDeg] = useState(45);
	const [zoom, setZoom] = useState(1);
	const [opacity, setOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.scrollY;
			if (scroll <= window.innerHeight * 0.75) {
				const d = 45 - (45 * scroll) / (window.innerHeight * 0.75);
				setDeg(d);
				setZoom(1);
				setY(0);
				setOpacity(1);
			} else if (
				scroll > window.innerHeight * 0.75 &&
				scroll <= window.innerHeight * 2.4
			) {
				const z = scroll / (window.innerHeight * 0.75);
                setZoom(z);
                const v = (scroll - window.innerHeight * 0.75) / (window.innerHeight * 1.65);
                setY(v * 100);
				setOpacity(1);
			} else {
				setOpacity(0);
				setY(0);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main className="skew-page w-screen flex justify-center items-center">
			<section className="sec-1">
				<div className="container">
					<Image
						src="/pc.svg"
						alt="scene"
						width={1920}
						height={1080}
						style={{
							transform: `scale(${zoom}) rotateY(${deg}deg) translateY(${y}px)`,
							opacity: opacity,
						}}
					/>
				</div>
			</section>
			<section></section>
			<section></section>
			<section></section>
		</main>
	);
};

export default SkewPage;
