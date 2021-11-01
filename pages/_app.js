import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Footer from '../components/Footer';
import React, { useState } from 'react';
// import 'node_modules/react-modal-video/scss/modal-video.scss';

function MyApp({ Component, pageProps }) {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
