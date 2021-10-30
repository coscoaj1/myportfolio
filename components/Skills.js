import React, { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';

function Skills() {
	const [isShowing, setIsShowing] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', changeHeader);
		return () => window.removeEventListener('scroll', changeHeader);
	});

	const changeHeader = () => {
		if (window.scrollY >= 600) {
			setIsShowing(true);
		} else {
			setIsShowing(false);
		}
	};
	return (
		<div>
			<p className="my-3 text-5xl text-white">{'<skills />'}</p>
			<section className="flex justify-center h-screen w-full border border-red-500">
				<div className="flex flex-wrap items-center justify-center max-w-4xl mt-8 sm:w-full sm:gap-24 gap-6">
					<Transition
						as={Fragment}
						show={isShowing}
						enter="transform transition duration-[300ms]"
						enterFrom="opacity-0 rotate-[-120deg] scale-50"
						enterTo="opacity-100 rotate-0 scale-100"
						leave="transform duration-200 transition ease-in"
						leaveFrom="opacity-100 rotate-0 scale-100 "
						leaveTo="opacity-0 scale-95 "
					>
						<div className=" flex justify-around p-9 mt-6 text-left bg-white shadow-md w-96 h-60 rounded-xl">
							<Image
								src="/icons/12340106921551942641.svg"
								width={110}
								height={110}
							/>
							<Image
								src="/icons/8905768601551941711 (1).svg"
								width={125}
								height={125}
							/>
						</div>
					</Transition>
					<Transition
						as={Fragment}
						show={isShowing}
						enter="transform transition duration-[600ms]"
						enterFrom="opacity-0 rotate-[-120deg] scale-50"
						enterTo="opacity-100 rotate-0 scale-100"
						leave="transform duration-200 transition ease-in"
						leaveFrom="opacity-100 rotate-0 scale-100 "
						leaveTo="opacity-0 scale-95 "
					>
						<div className="grid place-items-center bg-white border shadow-md w-96 h-72 rounded-xl ">
							<div className="p-4">
								<Image
									src="/icons/PinClipart.com_eclipse-swt-plugin_3368555.png"
									width={310}
									height={150}
								/>
							</div>
						</div>
					</Transition>
					<Transition
						as={Fragment}
						show={isShowing}
						enter="transform transition duration-[900ms]"
						enterFrom="opacity-0 rotate-[-120deg] scale-50"
						enterTo="opacity-100 rotate-0 scale-100"
						leave="transform duration-200 transition ease-in"
						leaveFrom="opacity-100 rotate-0 scale-100 "
						leaveTo="opacity-0 scale-95 "
					>
						<div className=" flex flex-col  justify-center items-center p-9 text-left bg-white shadow-md w-96 h-96 rounded-xl">
							<div className=" w-full text-center text-gray-600">
								I also dabble in {'->'}
							</div>
							<div className="h-36">
								<Image
									src="/icons/nodejs-logo-svgrepo-com.svg"
									width={200}
									height={200}
								/>
							</div>
							<Image src="/icons/mongodb-ar21.svg" width={232} height={120} />
						</div>
					</Transition>
				</div>
			</section>
		</div>
	);
}

export default Skills;
