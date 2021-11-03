import React from 'react';
import Header from './Header';
import { VscGithub } from 'react-icons/vsc';
import { AiFillLinkedin } from 'react-icons/ai';

function Hero() {
	return (
		<div id="light" className="relative max-w-full h-[95vh] bg-[#111828] ">
			<Header />
			<div className="absolute flex items-center justify-center flex-row h-[80vh] bg-opacity-100 ">
				<div className="hidden sm:flex flex-col justify-center items-center gap-2 h-full w-24">
					<div className="flex flex-col w-12 ml-3 gap-4">
						<a href="https://github.com/coscoaj1" target="_blank">
							<button className="w-12 h-12">
								<VscGithub className="w-6 h-6 z-10 text-white" />
							</button>
						</a>
						<button>
							<AiFillLinkedin className="w-6 h-6 text-white" />
						</button>
					</div>
					<div className="flex flex-col w-12 h-36 border-l ml-8 mt-4 border-gray-500"></div>
				</div>
				<div className="flex flex-col justify-center items-center h-full w-screen sm:w-full">
					<section className="text-white w-full flex flex-col">
						<div className="flex items-center justify-center gap-4">
							<div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-5 sm:pl-4 font-bold text-[#fafafa]">
								<div className="text-xl md:text-2xl text-center sm:text-left">
									Hi, I'm Anthony
								</div>
								<div className=" flex flex-row text-4xl sm:text-7xl lg:text-8xl xl:text-9xl justify-center sm:justify-start">
									<div>Frontend </div>{' '}
									<div className="text-[#818cf8]">Developer</div>
								</div>
								<div className="italic text-3xl md:text-4xl my-2 font-medium text-center sm:text-left">
									and Javascript enthusiast
								</div>
							</div>
						</div>
					</section>
					<div className="absolute bottom-0 right-5">
						<div className="font-medium sm:text-4xl md:text-5xl text-2xl text-[#0891b2]">
							{'</>'}
						</div>
					</div>
					<div id="light" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
