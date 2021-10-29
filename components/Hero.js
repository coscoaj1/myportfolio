import React from 'react';
import Image from 'next/image';
import Header from './Header';

function Hero() {
	return (
		<div className="relative w-screen h-screen">
			<Image
				src="/images/mountains-2021-08-26-18-34-26-utc.jpg"
				layout="fill"
				objectFit="cover"
			/>
			<div className="absolute inset-0 w-screen  bg-black opacity-40" />
			<Header />
			<section className="w-full flex flex-col items-center justify-center absolute top-1/2">
				<h4 className="text-white text-3xl font-light">HI, I'M ANTHONY</h4>
				<h1 className="text-white text-6xl font-light">WEB DEVELOPER</h1>
			</section>
		</div>
	);
}

export default Hero;
