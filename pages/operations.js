import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { useEffect, useState, useRef } from 'react';
import useContentful from '../utils/useContentful';
import { motion } from 'framer-motion';
import {
  handleMobileVh,
  debugLaunch,
  debugLive,
  url,
  debugConfig,
} from '../utils/helpers';
import Logo from '../components/logo';
import styles from '../styles/Operations.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
import Loader from '../components/loader';
import IconSatellite from '../components/svg/iconSatellite';

// const URL = process.env.STRAPIBASEURL;
const URL = url;

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
// const instructionsText = ['TAP & DRAG THE GLOBE', 'TO VISIT RAF OPERATIONS'];
const instructionsText = [
  'TAP & DRAG TO DISCOVER A VARIETY OF',
  'RAF PROFESSIONALS AROUND THE WORLD',
];
const instructionsTextSmall = ['TAP & DRAG', 'THE GLOBE'];
const instructionsItems = instructionsText.map((txt, i) => (
  <p key={i}>{txt}</p>
));
const instructionsItemsSmall = instructionsTextSmall.map((txt, i) => (
  <p key={i}>{txt}</p>
));

// export async function getStaticProps() {
//   // export async function getServerSideProps() {
//   try {
//     const resLaunch = await fetch(`${URL}/api/launch-time`);
//     const resLive = await fetch(`${URL}/api/live`);
//     const jsonLaunch = await resLaunch.json();
//     const jsonLive = await resLive.json();
//     const launch = jsonLaunch.data.attributes.launch;
//     const live = jsonLive.data.attributes.live;
//     return {
//       props: { launch, live },
//       // revalidate: 10,
//     };
//   } catch (err) {
//     const launch = debugLaunch;
//     const live = debugLive;
//     return {
//       props: { launch, live },
//     };
//   }
// }

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   // console.log(json);
//   const data = json.data.attributes.live;
//   // console.log('data from fetcher is ', data);
//   return data;
// };

// setTimeout(() => {
//   // if (window.Tawk_API) {
//   // window.Tawk_API.hideWidget();
//   // }
//   // console.log(window.Tawk_API);
//   window.Tawk_API.hideWidget();
// }, 100);

// window.onload = function () {
//   if (window.Tawk_API) {
//     window.Tawk_API.hideWidget();
//   }
// };

// if (typeof window !== 'undefined') {
//   window.addEventListener('load', () => {
//     // console.log('page is loaded');
//     console.log(document);
//     setTimeout(() => {
//       // console.log(window.Tawk_API);
//       if (window.Tawk_API) {
//         window.Tawk_API.hideWidget();
//       }
//     }, 1000);
//     // console.log(window.Tawk_API);
//   });
// }

function Operations({ launch, live }) {
  // const { data, error } = useSWR(`${URL}/api/live`, fetcher, {
  //   fallbackData: live,
  // });
  // // if (error) console.log(error);
  // if (!data) console.log('loading...');
  const [config, setConfig] = useState(debugConfig);
  const { getConfig } = useContentful();
  useEffect(() => {
    // setLive(debugLive);
    handleMobileVh();
    setConfig(debugConfig);
    getConfig().then((res) => setConfig(res));
    // const configRetrieved = await getConfig();
    // if (configRetrieved) {
    //   console.log('config retrieved');
    //   setConfig(configRetrieved);
    // }

    // if (window.Tawk_API) {
    //   window.Tawk_API.hideWidget();
    // }
    // return () => {
    //   if (window.Tawk_API) {
    //     window.Tawk_API.showWidget();
    //   }
    // };

    // window.onload = function () {
    // console.log(window.Tawk_API);
    // if (window.Tawk_API) {
    //   window.Tawk_API.hideWidget();
    // }
    // };

    // document.addEventListener(
    //   'DOMContentLoaded',
    //   () => {
    //     console.log(window.Tawk_API);
    //     if (window.Tawk_API) {
    // window.Tawk_API.hideWidget();
    //     }
    //   },
    //   false
    // );

    // setTimeout(() => window.Tawk_API.hideWidget(), 2000);
    // window.Tawk_API.hideWidget();

    // const tawk = document.querySelector('.font-lato');
    // tawk.style.display = 'none';

    // document.getElementById('tawk').remove();
  }, []);

  // useEffect(() => {
  //   console.log(document.getElementById('tawk'));
  // });
  return (
    <>
      <div className='wrapper'>
        <Head>
          <title>RAF World | Operations</title>
          <meta name='description' content='RAF Access All Areas experience' />
          {/* <link rel='icon' href='/favicon.ico' /> */}
          {/* <link rel='icon' href='/favicon.png' /> */}
          <link rel='icon' href='/favicon3.png' />
        </Head>
        <img src='/stars.jpg' className={styles.bg} />
        <header className={styles.header}>
          {/* <div style={{ transform: 'translateY(40%)' }}> */}
          <div>
            <Logo className={styles.logo} />
            <a
              // href='https://www.raf.mod.uk/recruitment/apply?utm_source=virtual_event&utm_medium=referral&utm_campaign=RAF&utm_content=RAFWorld-Event-Application-84334'
              // href={config.applyNowLink}
              href={config.applyNowLink || debugConfig.applyNowLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='apply-now apply-operations'>APPLY NOW</button>
            </a>
          </div>
          {/* <Countdown launch={launch} live={live} /> */}
          {/* <Countdown launch={launch} live={data} /> */}
          <Countdown launch={config.launchTime} live={config.live} />
        </header>
        <div className={styles.instructions}>
          <img src='/rotate.svg' className={styles.rotate} alt='' />
          <div className={styles.items}>{instructionsItems}</div>
          <div className={styles.itemsSmall}>{instructionsItemsSmall}</div>
        </div>
        <Link href='/comms' passHref>
          <div className={styles.commsLink}>
            {/* <IconSatellite colour={live ? '#C60C30' : '#038FD6'} size={75} /> */}
            {/* <IconSatellite colour={data ? '#C60C30' : '#038FD6'} size={75} /> */}
            <IconSatellite
              colour={config.live ? '#C60C30' : '#038FD6'}
              size={75}
            />
            <div className={styles.commsText}>
              {/* <span style={{ color: live ? '#C60C30' : '#038FD6' }}> */}
              {/* <span style={{ color: data ? '#C60C30' : '#038FD6' }}> */}
              <span style={{ color: config.live ? '#C60C30' : '#038FD6' }}>
                {/* {live ? "WE'RE LIVE" : 'VISIT THE'} */}
                {/* {data ? "WE'RE LIVE" : 'VISIT THE'} */}
                {config.live ? "WE'RE LIVE" : 'VISIT THE'}
              </span>
              {/* {live ? 'CHAT NOW' : 'COMMS ROOM'} */}
              {/* {data ? 'CHAT NOW' : 'COMMS ROOM'} */}
              {config.live ? 'CHAT NOW' : 'COMMS ROOM'}
              <span
                className={styles.liveAt}
                style={{ display: config.live ? 'none' : 'block' }}
              >
                {/* Live at 18:00. */}
                LIVE AT 18:00
              </span>
            </div>
          </div>
        </Link>
        {/* <a
          href='https://www.raf.mod.uk/recruitment/apply?utm_source=virtual_event&utm_medium=referral&utm_campaign=RAF&utm_content=RAFWorld-Event-Application-84334'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='apply-now'>APPLY NOW</button>
        </a> */}
        {/* <Earth live={live} /> */}
        {/* <Earth live={data} /> */}
        <Earth live={config.live} />
        <Loader />
      </div>
      <motion.div
        className='slide'
        initial={{ y: '120%' }}
        animate={{ y: '120%' }}
        exit={{ y: '0%' }}
        transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
      >
        <div className='blue'></div>
        <img src='/transition-bg.jpg' className='transition-bg' alt='' />
        <img src='/transition.jpg' className='transition-main' alt='' />
      </motion.div>
      <motion.div
        className='slide'
        initial={{ y: '0%' }}
        animate={{ y: '-120%' }}
        exit={{ y: '-120%' }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      >
        <div className='blue'></div>
        <img src='/transition-bg.jpg' className='transition-bg' alt='' />
        <img src='/transition.jpg' className='transition-main' alt='' />
      </motion.div>
    </>
  );
}

export default Operations;
