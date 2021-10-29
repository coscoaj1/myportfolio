import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<div className="max-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />

			<div>
				<main className="flex flex-col items-center justify-center w-full bg-black flex-1 px-20 text-center">
					<section>
						<p className="mt-3 text-5xl text-white">skills</p>
						<div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
							<div className="p-6 mt-6 flex flex-col items-center justify-center bg-gray-300 border border-gray-300 shadow-md w-96 rounded-xl ">
								<Image
									src="/icons/PinClipart.com_eclipse-swt-plugin_3368555.png"
									width={300}
									height={150}
								/>
							</div>
							<div className=" flex gap-3 justify-center p-9 mt-6 text-left bg-gray-300 shadow-md w-96 rounded-xl">
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
							<a
								href="https://github.com/vercel/next.js/tree/master/examples"
								className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
							>
								<h3 className="text-2xl font-bold">Examples &rarr;</h3>
								<p className="mt-4 text-xl">
									Discover and deploy boilerplate example Next.js projects.
								</p>
							</a>
							<a
								href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
								className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
							>
								<h3 className="text-2xl font-bold">Deploy &rarr;</h3>
								<p className="mt-4 text-xl">
									Instantly deploy your Next.js site to a public URL with
									Vercel.
								</p>
							</a>
						</div>
					</section>
				</main>
			</div>

			<footer className="flex items-center justify-center w-full h-24 border-t">
				<a
					className="flex items-center justify-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
				</a>
			</footer>
		</div>
	);
}
