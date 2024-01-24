import Image from "next/image";
import React, { useEffect, useState } from "react";

const SkewPage: React.FC = () => {
    const [deg, setDeg] = useState(45);
    useEffect(() => {
        const handleScroll = () => {
            // scroll from 0vh to 100vh, deg goes from 45 to 0
            const scroll = window.scrollY;
            const deg = 45 - (45 * scroll) / window.innerHeight;
            setDeg(deg);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
	return (
		<main className="skew-page w-screen flex justify-center items-center">
			{/* <div className="tv-screen">
				<div className="tv-screen-inner"></div>
            </div>
            <div className="box box-1">Akshat X</div>
            <div className="box box-2">Akshat Y</div>
            <div className="box box-3">Akshat Z</div> */}
			<section className="sec-1">
				<div className="container">
					<Image
						src="/scene.png"
						alt="scene"
						width={1920}
                        height={1080}
                        style={{
                            transform: `rotateY(${deg}deg)`
                        }}
					/>
				</div>
            </section>
            <section></section>
		</main>
	);
};

export default SkewPage;
