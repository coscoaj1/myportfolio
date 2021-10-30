import React from 'react';
import Image from 'next/image';
import Header from './Header';

function Hero() {
	return (
		<div className="relative w-screen h-screen">
			{/* <Image
				src="/images/mountains-2021-08-26-18-34-26-utc.jpg"
				layout="fill"
				objectFit="cover"
			/> */}
			<div className="absolute inset-0 w-screen  bg-black opacity-40" />
			<Header />
			<section className="w-full flex flex-col items-center justify-center absolute top-1/2">
				<h4 className="text-gray-100 text xl sm:text-2xl font-thin uppercase">
					Hi, I'm Anthony
				</h4>
				<div className="text-white text-4xl sm:text-5xl font-thin uppercase">
					Frontend Developer
				</div>
			</section>
		</div>
	);
}

export default Hero;
