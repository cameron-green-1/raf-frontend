import '../styles/globals.css';
// import '../public/fonts/fonts.css';
// import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <title>RAF World | Access All Areas</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
        {/* <link rel='icon' href='/favicon.png' /> */}
        {/* <link
          rel='preload'
          href='/fonts/GothamSSm-Medium_Web.woff'
          as='font'
          type='font/woff'
          crossOrigin='anonymous'
        /> */}
      </Head>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
