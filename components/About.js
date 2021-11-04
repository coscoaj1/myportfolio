import React from 'react';

function About() {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center text-2xl text-gray-500"
		>
			<div className="text-4xl text-left border border-purple-500 sm:w-[550px] w-96 mt-12">
				About Me
			</div>
			<div className="border border-white w-96 sm:w-[550px] my-12">
				I am a self-taught developer with a focus on frontend engineering, and
				an interest in backend as well. I come from a non-traditional
				background. I love solving complex problems, and look forward to growing
				in my developer career.
			</div>
		</div>
	);
}

export default About;
