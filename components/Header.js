import React from 'react';

function Header() {
	return (
		<header className="z-10 fixed top-0 flex w-full p-4 text-white">
			<div className="text-4xl flex-grow">AC</div>
			<div className="flex text-xl gap-4">
				<button>SKILLS</button>
				<button>PROJECTS</button>
				<button>CONTACT</button>
			</div>
		</header>
	);
}

export default Header;
