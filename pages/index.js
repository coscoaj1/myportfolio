import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<div className="w-screen bg-[#111828]">
			<div className="md:mx-auto max-w-7xl bg-[#111828]">
				<Head>
					<title>Anthony Cosco Portfolio</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Hero />
				<Skills />
			</div>
			<div>
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
