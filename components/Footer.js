import React from 'react';
import Image from 'next/image';

function Footer() {
	return (
		<footer className="flex items-center justify-center w-full h-24 border-t">
			<button className="flex items-center justify-center gap-2">
				Powered by{' '}
				<Image
					src="/icons/coffee-icon-svgrepo-com.svg"
					height={36}
					width={36}
				/>
			</button>
		</footer>
	);
}

export default Footer;
