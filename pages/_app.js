import '../styles/globals.css';
import Script from 'next/script';
// import '../public/fonts/fonts.css';
// import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <head>
        <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-2DG7N9Y9P8`}
          id='my-script-1'
        />
        <Script strategy='lazyOnload' id='my-script-2'>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2DG7N9Y9P8', {
        });
    `}
        </Script>
      </head>
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>RAF World | Access All Areas</title>
          <meta name='description' content='RAF Access All Areas experience' />
          <link rel='icon' href='/favicon3.png' />
        </Head>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
