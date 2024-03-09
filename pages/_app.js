// ./pages/_app.js
"use client";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/form.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Registration form</title>
        <link rel="icon" href="/assets/recoded.webp"></link>
      </Head>
      <div className={"bg-[url('/assets/bg-cyan.jpg')] bg-cover "}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
