import React from 'react';
import Image from 'next/image';
import Header from './Header';

function Hero() {
	return (
		<div className="relative max-w-7xl h-[65vh] bg-[#111828] ">
			<Header />
			<div id="wrapper">
				<section className="text-white w-full flex flex-col absolute top-1/2">
					<div className="flex flex-col gap-2 sm:gap-5 sm:pl-4 font-bold text-[#fafafa]">
						<div className="font-light text-xl">Hi, I'm Anthony</div>
						<div className=" flex flex-row text-4xl sm:text-7xl">
							<div>Frontend </div>{' '}
							<div className="text-[#818cf8]">Developer</div>
						</div>
						<div className="italic text-3xl my-2 font-medium">
							This is my porfolio
						</div>
					</div>
				</section>
				<div className="absolute bottom-0 right-5">
					<div className="font-medium sm:text-7xl text-3xl text-[#0891b2]">
						{'</>'}
					</div>
				</div>
				<div id="light" />
			</div>
		</div>
	);
}

export default Hero;
