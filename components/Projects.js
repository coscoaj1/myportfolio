import React from 'react';
import Image from 'next/image';
import MobileDropdownMenu from './MobileDropdownMenu';

function Projects() {
	return (
		<div className="max-w-screen bg-[#fafafa] ">
			<p className="mt-3 pt-3 text-2xl text-center text-gray-400 font-medium bg-[#fafafa]">
				projects
			</p>
			<section className="flex flex-col justify-center items-center sm:h-auto w-screen">
				<div className="p-6 mt-6 flex flex-col sm:flex-row items-center justify-around gap-12 bg-[#fafafa] border-b border-gray-400 w-full h-auto">
					<a target="_blank" href="https://airbnbnextclone.vercel.app">
						<button>
							<Image src="/images/91374.jpg" width={600} height={500} />
						</button>
					</a>
					<div className="flex flex-col gap-5 w-96 bg-[#fafafa] ">
						<div className="text-3xl font-bold text-center">
							{' '}
							Fullstack Airbnb Clone
						</div>
						<div className="text-gray-400 text-center font-medium">
							Created with a Next.js/TailwindCSS frontend, and a Node.js/MongoDB
							backened
						</div>
						<div className="flex justify-center gap-8">
							{' '}
							<button className="flex justify-center items-center w-32 px-5 py-2  bg-[#818cf8] text-white font-medium rounded-3xl">
								<Image src="/icons/preview-65 (1).svg" width={36} height={36} />
								<span>Preview</span>
							</button>
							<button className="flex justify-center items-center gap-1 w-32 px-5 py-2 border border-[#818cf8]  text-purple-500 rounded-3xl">
								<Image
									src="/icons/iconmonstr-github-1 (1).svg"
									width={36}
									height={36}
								/>
								<span>Github</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Projects;
