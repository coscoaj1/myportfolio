import React from 'react';
import { DiStackoverflow, DiDatabase, DiGitPullRequest } from 'react-icons/di';
import Contact from './Contact';
import { BsPersonLinesFill } from 'react-icons/bs';

function About() {
	return (
		<div
			id="about"
			className="relative flex flex-col items-center justify-center gap-24 bg-aboutbg"
		>
			<div className="absolute inset-0 bg-black opacity-[83%] w-full h-[auto]"></div>

			<div className="flex flex-col items-center justify-center w-full">
				<div className="flex flex-col items-center justify-center w-full gap-4">
					<div className="z-10 mt-24 text-5xl font-medium text-white">
						About<span className="text-[#818cf8]">Me</span>
					</div>
					<BsPersonLinesFill className="z-10 w-20 h-20 text-center text-gray-300" />
				</div>
				<div className="z-10 flex flex-col">
					<div className="my-8 mx-2 text-xl text-gray-300 w-96">
						I am a self-taught <span className="text-[#818cf8]">developer</span>{' '}
						with a passion for <span className="text-[#818cf8]">frontend</span>{' '}
						engineering in React and
						<span className="text-[#818cf8]"> Next.js.</span> My homebase is in
						Asheville, NC. I can help{' '}
						<span className="text-[#818cf8]">solve complex problems</span> for
						your company, and am willing and eager to learn{' '}
						<span className="text-[#818cf8]">new technologies </span>
						to expand my developer career.
					</div>
					<div className="flex flex-row items-center justify-center gap-2">
						<DiStackoverflow className="w-12 h-12 text-gray-300" />
						<DiDatabase className="w-12 h-12 text-gray-300" />
						<DiGitPullRequest className="w-12 h-12 text-gray-300" />
					</div>
				</div>
			</div>
			<Contact passHref />
		</div>
	);
}

export default About;
