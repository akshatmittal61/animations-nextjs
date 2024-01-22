import React, { useState } from "react";
import Image from "next/image";
import anime from "animejs";

const HomePage: React.FC = () => {
	const [isClient, setIsClient] = useState(false);
	const handleHeroFont = () => {
		anime({
			targets: ".hero-text",
			fontSize: [
				{ value: "128px", duration: 0 },
				{ value: `${Math.max(128 + window.scrollY, 128)}px` },
			],
			translateX: [
				{ value: "0%", duration: 0 },
				{ value: `-${Math.min(window.scrollY / 20, 100)}%` },
			],
			translateY: [
				{ value: "0%", duration: 0 },
				{ value: `-${Math.min(window.scrollY / 25, 100)}%` },
			],
			easing: "easeInOutQuad",
			duration: 0,
		});
	};

	React.useEffect(() => {
		setIsClient(true);
		document.addEventListener("scroll", handleHeroFont);
		return () => {
			document.removeEventListener("scroll", handleHeroFont);
		};
	}, []);

	return (
		<main className="w-screen bg-gray-100">
			<section
				className="hero bg-gray-100 sticky top-0 left-0 z-10 w-full h-screen text-9xl flex justify-center items-center"
				style={{
					backgroundColor: `rgba(0, 0, 0, ${
						isClient ? Math.min(window.scrollY / 1000, 0.5) : 0
					})`,
				}}
			>
				<div className="hero-text whitespace-nowrap">
					<span className="hero-1">Data</span>
					<span className="hero-2">Magic</span>
					<span
						className="hero-3"
						style={
							isClient
								? window.innerHeight - window.scrollY < 100
									? {
											backgroundClip: "text",
											color: "transparent",
									  }
									: {}
								: {}
						}
					>
						.
					</span>
				</div>
			</section>
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
