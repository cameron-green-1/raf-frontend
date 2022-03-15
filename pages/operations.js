import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { handleMobileVh, debugLaunch, debugLive, url } from '../utils/helpers';
import Logo from '../components/logo';
import styles from '../styles/Operations.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
import Loader from '../components/loader';
import IconSatellite from '../components/svg/iconSatellite';

// const URL = process.env.STRAPIBASEURL;
const URL = url;

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
const instructionsText = ['TAP & DRAG THE GLOBE', 'TO VISIT RAF OPERATIONS'];
const instructionsItems = instructionsText.map((txt, i) => (
  <p key={i}>{txt}</p>
));

// export async function getStaticProps() {
export async function getServerSideProps() {
  try {
    const resLaunch = await fetch(`${URL}/api/launch-time`);
    const resLive = await fetch(`${URL}/api/live`);
    const jsonLaunch = await resLaunch.json();
    const jsonLive = await resLive.json();
    const launch = jsonLaunch.data.attributes.launch;
    const live = jsonLive.data.attributes.live;
    return {
      props: { launch, live },
    };
  } catch (err) {
    const launch = debugLaunch;
    const live = debugLive;
    return {
      props: { launch, live },
    };
  }
}

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  // console.log(json);
  const data = json.data.attributes.live;
  // console.log('data from fetcher is ', data);
  return data;
};

function Operations({ launch, live }) {
  const { data, error } = useSWR(`${URL}/api/live`, fetcher, {
    fallbackData: live,
  });
  // if (error) console.log(error);
  if (!data) console.log('loading...');
  useEffect(() => {
    // setLive(debugLive);
    handleMobileVh();
  }, []);
  return (
    <>
      <div className='wrapper'>
        <Head>
          <title>RAF World | Operations</title>
          <meta name='description' content='RAF Access All Areas experience' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <img src='/stars.jpg' className={styles.bg} />
        <header className={styles.header}>
          <Logo className={styles.logo} />
          {/* <Countdown launch={launch} live={live} /> */}
          <Countdown launch={launch} live={data} />
        </header>
        <div className={styles.instructions}>
          <img src='/rotate.svg' className={styles.rotate} alt='' />
          <div className={styles.items}>{instructionsItems}</div>
        </div>
        <Link href='/comms' passHref>
          <div className={styles.commsLink}>
            {/* <IconSatellite colour={live ? '#C60C30' : '#038FD6'} size={75} /> */}
            <IconSatellite colour={data ? '#C60C30' : '#038FD6'} size={75} />
            <div className={styles.commsText}>
              {/* <span style={{ color: live ? '#C60C30' : '#038FD6' }}> */}
              <span style={{ color: data ? '#C60C30' : '#038FD6' }}>
                {/* {live ? "WE'RE LIVE" : 'VISIT THE'} */}
                {data ? "WE'RE LIVE" : 'VISIT THE'}
              </span>
              {/* {live ? 'CHAT NOW' : 'COMMS ROOM'} */}
              {data ? 'CHAT NOW' : 'COMMS ROOM'}
            </div>
          </div>
        </Link>
        {/* <Earth live={live} /> */}
        <Earth live={data} />
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
