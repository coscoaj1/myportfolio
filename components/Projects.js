import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

function Projects() {
	const [showModal, setShowModal] = useState(false);

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
							Full Stack Airbnb Clone
						</div>
						<div className="text-gray-400 text-center font-medium">
							Created with React/Next.js, Node.js, and MongoDB
						</div>
						<div className="flex justify-center gap-8">
							{' '}
							<button
								onClick={() => setShowModal(true)}
								className="flex justify-center items-center w-32 px-5 bg-[#818cf8] transition duration-300 hover:bg-purple-500 active:scale-90 transform text-white font-medium rounded-3xl"
							>
								<Image src="/icons/preview-65 (1).svg" width={36} height={36} />
								<span>Preview</span>
							</button>
							{/* <Modal onClose={() => setShowModal(false)} show={showModal}>
								Hello from the modal!
							</Modal> */}
							<a
								href="https://github.com/coscoaj1/airbnbnextclone"
								target="_blank"
							>
								<button className="flex justify-center items-center gap-1 w-32 px-5 py-1.5 border border-[#818cf8]  text-[#818cf8]  transition duration-300 active:scale-90 transform hover:scale-105 rounded-3xl">
									<Image
										src="/icons/iconmonstr-github-1 (1).svg"
										width={36}
										height={36}
									/>
									GitHub
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Projects;
