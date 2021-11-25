import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, [pathname]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Anthony Cosco Portfolio." />
        <title>Anthony Cosco Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
