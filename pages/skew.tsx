import Image from "next/image";
import React, { useEffect, useState } from "react";

const SkewPage: React.FC = () => {
	const [deg, setDeg] = useState(45);
	const [zoom, setZoom] = useState(1);
	useEffect(() => {
		const handleScroll = () => {
			// scroll from 0vh to 75vh, deg goes from 45 to 0
			// from 75vh to 150vh, zoom goes from 1 to 2
			const scroll = window.scrollY;
			if (scroll <= window.innerHeight * 0.75) {
				const d = 45 - (45 * scroll) / (window.innerHeight * 0.75);
				setDeg(d);
				setZoom(1);
			}
			if (
				scroll > window.innerHeight * 0.75 &&
				scroll <= window.innerHeight * 2.5
			) {
				const z = scroll / (window.innerHeight * 0.75);
				setZoom(z);
			}
			/* const d = 45 - (45 * scroll) / (window.innerHeight * 0.75);
            const z = 1 + (scroll / (window.innerHeight * 0.75));
            setDeg(d);
            setZoom(z); */
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
						src="/scene.png"
						alt="scene"
						width={1920}
						height={1080}
						style={{
							transform: `scale(${zoom}) rotateY(${deg}deg)`,
						}}
					/>
				</div>
			</section>
			<section></section>
			<section></section>
		</main>
	);
};

export default SkewPage;
