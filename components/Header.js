import React, { useState, useEffect } from 'react';
import Image from 'next/image';
function Header() {
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', changeHeader);
		return () => window.removeEventListener('scroll', changeHeader);
	});

	const changeHeader = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	return (
		<header
			className={
				navbar
					? 'z-10 fixed bg-black top-0 flex w-full p-4 text-white font-light'
					: 'z-10 fixed top-0 flex w-full p-4 text-white font-light'
			}
		>
			<div className="flex-grow">
				<button>
					<Image src="/icons/AC (5).png" height={100} width={100} />
				</button>
			</div>
			<div className="flex text-xl gap-6">
				<button className="font-light">SKILLS</button>
				<button className="font-light">PROJECTS</button>
				<button className="font-light">CONTACT</button>
			</div>
		</header>
	);
}

export default Header;
