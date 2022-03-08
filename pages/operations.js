import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { handleMobileVh, debugLaunch, debugLive } from '../utils/helpers';
import Logo from '../components/logo';
import styles from '../styles/Operations.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
import Loader from '../components/loader';
import IconSatellite from '../components/svg/iconSatellite';

const URL = process.env.STRAPIBASEURL;

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
const instructionsText = ['TAP & DRAG THE GLOBE', 'TO VISIT RAF OPERATIONS'];
const instructionsItems = instructionsText.map((txt, i) => (
  <p key={i}>{txt}</p>
));

export async function getStaticProps() {
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

function Operations({ launch, live }) {
  // const [live, setLive] = useState(false); // THIS STATE NEEDS TO BE UPDATED FROM CMS
  useEffect(() => {
    // setLive(debugLive);
    handleMobileVh();
  }, []);
  return (
    <>
      <div className='wrapper'>
        <Head>
          <title>RAF Access All Areas</title>
          <meta name='description' content='RAF Access All Areas experience' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <img src='/stars.jpg' className={styles.bg} />
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <Countdown launch={launch} live={live} />
        </header>
        <div className={styles.instructions}>
          <img src='/rotate.svg' className={styles.rotate} alt='' />
          <div className={styles.items}>{instructionsItems}</div>
        </div>
        <Link href='/comms' passHref>
          <div className={styles.commsLink}>
            <IconSatellite colour={live ? '#C60C30' : '#038FD6'} size={75} />
            <div className={styles.commsText}>
              <span style={{ color: live ? '#C60C30' : '#038FD6' }}>
                {live ? "WE'RE LIVE" : 'VISIT THE'}
              </span>
              {live ? 'CHAT NOW' : 'COMMS ROOM'}
            </div>
          </div>
        </Link>
        <Earth live={live} />
        <Loader />
      </div>
      <motion.div
        className='slide'
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
      >
        <div></div>
        <img src='/transition.jpg' alt='' />
      </motion.div>
      <motion.div
        className='slide'
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      >
        <div></div>
        <img src='/transition.jpg' alt='' />
      </motion.div>
      {/* <motion.div
        className='slide'
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
      >
        <div></div>
        <img src='/transition.jpg' alt='' />
      </motion.div>
      <motion.div
        className='slide'
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      >
        <div></div>
        <img src='/transition.jpg' alt='' />
      </motion.div> */}
    </>
  );
}

export default Operations;
