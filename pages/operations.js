import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { handleMobileVh } from '../utils/helpers';
import Logo from '../components/logo';
import styles from '../styles/Operations.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
const instructionsText = ['TAP & DRAG THE GLOBE', 'TO VISIT RAF OPERATIONS'];
const instructionsItems = instructionsText.map((txt, i) => (
  <p key={i}>{txt}</p>
));

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:1337/api/launch-time');
    const json = await res.json();
    const launch = json.data.attributes.launch;
    return {
      props: { launch },
    };
  } catch (err) {
    const launch = '2022-03-04T19:30:00.000Z';
    return {
      props: { launch },
    };
  }
}

function Operations({ launch }) {
  useEffect(() => {
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
          <Countdown launch={launch} />
        </header>
        <div className={styles.instructions}>
          <img src='/rotate.svg' className={styles.rotate} alt='' />
          <div className={styles.items}>{instructionsItems}</div>
        </div>
        <Earth />
      </div>
      <motion.div
        className='slide-in'
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.div
        className='slide-out'
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      />
    </>
  );
}

export default Operations;
