import React from 'react';
import Header from './Header';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import Skills from './Skills';
import { IoDocumentTextOutline } from 'react-icons/io5';

function Hero() {
	return (
		<div className="relative max-w-full h-[auto] bg-herobg">
			<div className="absolute inset-0 bg-[#212124] opacity-75 h-[auto]"></div>
			<Header />
			<div className="flex flex-col">
				<div className="flex flex-row h-[100vh] text-gray-300 justify-center sm:justify-start">
					<div className="z-10 flex flex-col items-center justify-center w-6 h-full sm:gap-2 -mr-2">
						<div className="flex flex-col w-12 gap-4 sm:ml-3">
							<a
								href="https://drive.google.com/file/d/1IOw5WuJmErTKxc8vGNdj9-oT6b48jfD6/view?usp=sharing"
								target="_blank"
							>
								<button className="w-8 h-8">
									<IoDocumentTextOutline
										title="Resume"
										className="z-10 w-6 h-6 text-gray-300"
									/>
								</button>
							</a>
							<a href="https://github.com/coscoaj1" target="_blank">
								<button title="Github" className="w-12 h-12">
									<AiFillGithub className="z-10 w-6 h-6 text-gray-300" />
								</button>
							</a>
							<a href="https://www.linkedin.com/in/coscoaj1" target="_blank">
								<button>
									<AiFillLinkedin
										title="LinkedIn"
										className="w-6 h-6 text-gray-300"
									/>
								</button>
							</a>
						</div>
						<div className="flex flex-col w-12 border-l ml-6 border-gray-500 h-36"></div>
					</div>
					<div className="mr-2 flex flex-col items-center justify-center h-auto">
						<section className="z-10 flex flex-col w-full text-gray-300">
							<div className="flex flex-col items-center justify-center gap-2 font-bold text-gray-300 sm:gap-5 sm:pl-4 sm:justify-start sm:items-start">
								<div className="text-xl italic text-center md:text-2xl">
									Hi, I'm
									<span className="text-[#03d8c5] text-3xl"> Anthony.</span>
								</div>
								<div className="flex flex-row justify-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl sm:justify-start">
									<div>Frontend </div>{' '}
									<div className="text-[#818cf8]">Developer</div>
								</div>
								<div className="my-2 text-3xl font-medium text-center text-gray-300 md:text-4xl sm:text-left">
									and <span className="text-[#03d8c5]">JavaScript </span>
									enthusiast.
								</div>
							</div>
						</section>
					</div>
				</div>
				<Skills />
			</div>
		</div>
	);
}

export default Hero;
