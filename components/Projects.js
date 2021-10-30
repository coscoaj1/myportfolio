import React from 'react';
import Image from 'next/image';

function Projects() {
	return (
		<div className="bg-white">
			<p className="mt-3 text-5xl text-black">{'<projects />'}</p>
			<section className="flex flex-col justify-center items-center sm:h-auto w-screen">
				<div className="p-6 mt-6 flex flex-row items-center justify-between gap-12 bg-white border-b border-gray-300 shadow-md w-full h-auto rounded-xl ">
					<Image src="/images/91374.jpg" width={600} height={500} />
					<h1> links </h1>
				</div>
				<div className="p-6 mt-6 flex flex-row items-center justify-around gap-12 bg-gray-300 border border-gray-300 shadow-md w-full h-auto rounded-xl ">
					<h1> project 1</h1>
					<h1> links </h1>
				</div>
			</section>
		</div>
	);
}

export default Projects;
