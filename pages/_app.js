import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 50);
	}, [pathname]);

	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
