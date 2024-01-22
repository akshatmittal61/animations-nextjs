import React from "react";
import Image from "next/image";
import anime from "animejs";

const HomePage: React.FC = () => {
	const width = 40;
	const height = 40;

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		anime({
			targets: ".dot-point",
			scale: [
				{ value: 1.35, duration: 250, easing: "easeOutSine" },
				{ value: 1, duration: 500, easing: "easeInOutQuad" },
			],
			translateY: [
				{ value: -15, duration: 250, easing: "easeOutSine" },
				{ value: 0, duration: 500, easing: "easeInOutQuad" },
			],
			opacity: [
				{ value: 1, duration: 250, easing: "easeOutSine" },
				{ value: 0.5, duration: 500, easing: "easeInOutQuad" },
			],
			delay: anime.stagger(50, {
				grid: [width, height],
				from: +(e.currentTarget.getAttribute("data-index") ?? 0),
			}),
		});
	};

	return (
		<main className="w-screen h-screen bg-gray-100">
			<section className="hero w-full h-screen text-9xl flex justify-center items-center">
				<span className="hero-1">Data</span>
				<span className="hero-2">Magic</span>
				<span className="hero-3">.</span>
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
			<section className="w-full h-screen flex justify-center items-center">
				<div
					className="mesh grid w-fit"
					style={{
						gridTemplateColumns: `repeat(${width}, 1fr)`,
					}}
				>
					{[...Array(width)].map((_, i) =>
						[...Array(height)].map((_, j) => (
							<div
								key={`${i}-${j}`}
								data-index={i + j * width}
								onClick={handleClick}
								className="mesh-grid group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
							>
								<div className="dot-point w-2 h-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"></div>
							</div>
						))
					)}
				</div>
			</section>
		</main>
	);
};

export default HomePage;
