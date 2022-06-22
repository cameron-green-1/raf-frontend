import { useEffect } from 'react';
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import '../styles/globals.css';
import Script from 'next/script';
// import '../public/fonts/fonts.css';
// import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

// const GA_TRACKING_ID = 'G-Y0CMT322J1';
const GA_TRACKING_ID = 'G-2DG7N9Y9P8';

function MyApp({ Component, pageProps, router }) {
  // useEffect(() => {
  //   if (window.Tawk_API) {
  //     window.Tawk_API.hideWidget();
  //   }
  //   return () => {
  //     if (window.Tawk_API) {
  //       window.Tawk_API.showWidget();
  //     }
  //   };
  // });
  useEffect(() => {
    // const script = document.createElement('script');
    // script.id = 'tawkId';
    // script.async = true;
    // script.src =
    //   'https://embed.tawk.to/' + '5f16a9eda45e787d128bd52b' + '/default';
    // script.charset = 'UTF-8';
    // script.setAttribute('crossorigin', '*');
    // document.body.appendChild(script);
  }, []);
  return (
    <>
      <head>
        {/* <Script
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
        // </Script> */}
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
        {/* <script type='text/javascript'>
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5f16a9eda45e787d128bd52b/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
        </script> */}
        {/* </Script> */}
        {/* <Script strategy='lazyOnload' id='tawk'>
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/62b1de2ab0d10b6f3e789849/1g63cnm62';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `}
        </Script> */}
      </head>
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>RAF World | Access All Areas</title>
          <meta name='description' content='RAF Access All Areas experience' />
          <link rel='icon' href='/favicon3.png' />
          {/* <Script
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
          </Script> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-Y0CMT322J1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y0CMT322J1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}
        </Head>
        <Component {...pageProps} key={router.route} />
        {/* <Script id='tawk' strategy='lazyOnload'>
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/[]/[]';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
        </Script> */}
        {/* <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-Y0CMT322J1'
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y0CMT322J1');`}
        </script> */}
        {/* <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-Y0CMT322J1'
        ></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y0CMT322J1');`}
        </script> */}
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
