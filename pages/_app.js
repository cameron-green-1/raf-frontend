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
        <Script strategy='lazyOnload' id='my-script-3'>
          {`
          var _iub = _iub || [];
          _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"lang":"en","perPurposeConsent":true,"siteId":2704432,"whitelabel":false,"cookiePolicyId":35580205, "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom","rejectButtonDisplay":true }};
        `}
        </Script>
        <Script
          src='//cdn.iubenda.com/cs/ccpa/stub.js'
          strategy='lazyOnload'
          id='my-script-4'
        ></Script>
        <Script
          src='//cdn.iubenda.com/cs/iubenda_cs.js'
          charset='UTF-8'
          async
          strategy='lazyOnload'
          id='my-script-5'
        ></Script>
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
