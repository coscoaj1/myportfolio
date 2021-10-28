import React from 'react';
import Image from 'next/image';

function Hero() {
	return (
		<div className="relative">
			<Image
				className="relative"
				src="/images/mountains-2021-08-26-18-34-26-utc.jpg"
				layout="responsive"
				width={2560}
				height={1440}
			/>
			<section className="absolute top-1/2">
				<h4 className="text-white text-2xl font-light">HI, I'M ANTHONY</h4>
				<h1 className="text-text text-6xl font-light">WEB DEVELOPER</h1>
			</section>
		</div>
	);
}

export default Hero;
