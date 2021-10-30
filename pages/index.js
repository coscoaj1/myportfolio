import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />

			<div>
				<main className="flex flex-col items-center justify-center w-full gap-2 bg-black px-20 text-center">
					<Skills />
					<Projects />
				</main>
			</div>
		</div>
	);
}
