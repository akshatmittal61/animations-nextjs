import Image from "next/image";
import React from "react";

const HomePage: React.FC = () => {
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
		</main>
	);
};

export default HomePage;
