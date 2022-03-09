import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import {
  handleMobileVh,
  defaultHolding,
  defaultLaunch,
  debugHolding,
  debugLaunch,
  getDate,
  getTime,
} from '../utils/helpers';
import Logo from '../components/logo';
import styles from '../styles/Holding.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
// import withTransition from '../components/withTransition';

const URL = process.env.STRAPIBASEURL;

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
const instructionsText = ['TAP & DRAG THE GLOBE', 'TO VISIT RAF OPERATIONS'];
const instructionsItems = instructionsText.map((txt, i) => (
  <p key={i}>{txt}</p>
));

export async function getStaticProps() {
  try {
    const resHolding = await fetch(`${URL}/api/holding`);
    const resLaunch = await fetch(`http://localhost:1337/api/launch-time`);
    const jsonHolding = await resHolding.json();
    const jsonLaunch = await resLaunch.json();
    const holding = jsonHolding.data.attributes.holding;
    const launch = jsonLaunch.data.attributes.launch;
    return {
      props: { holding, launch },
    };
  } catch (err) {
    // const holding = defaultHolding;
    // const launch = defaultLaunch;
    const holding = debugHolding;
    const launch = debugLaunch;
    return {
      props: { holding, launch },
    };
  }
}

const Holding = ({ isHolding, launchTime }) => {
  const container = useRef(null);
  const date = getDate(launchTime);
  const time = getTime(launchTime);
  const dateTime = `${date} @ ${time}`;
  useEffect(() => {
    handleMobileVh();
    setTimeout(() => {
      const animate = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/lottie-logo-2.json',
      });
      animate.setSpeed(1.5);
    }, 1000);
  }, []);
  return (
    <div className='wrapper'>
      <Head>
        <title>RAF World | Access All Areas</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <img src='/stars.jpg' className={styles.bg} />
      <main className={styles.holding}>
        <div className={styles.holdingLogo} ref={container}></div>
        <p>
          {isHolding
            ? 'Sorry, RAF World is not currently live.'
            : 'Explore RAF World.'}
        </p>
        <p>
          {isHolding ? (
            <>
              The next event is on <span>{dateTime}</span>.
            </>
          ) : (
            <>
              The event starts at <span>{`@ ${time}`}</span>.
            </>
          )}
        </p>
        <Link
          href={
            isHolding
              ? 'https://www.raf.mod.uk/recruitment/find-your-role?gclid=CjwKCAiAjoeRBhAJEiwAYY3nDMXctPPv8gXRKpG53HH6kys5YSiBfrt3IUmShmy6ekuR0cyCILRQjxoCfqUQAvD_BwE&gclsrc=aw.ds'
              : '/operations'
          }
        >
          <button>{isHolding ? 'REGISTER NOW' : 'VISIT NOW'}</button>
        </Link>
        <img
          src='/holding-logos.png'
          alt='RAF Regular & Reserve | No Ordinary Job'
        />
      </main>
    </div>
  );
};

const Home = ({ holding, launch }) => {
  // const [isHolding, setIsHolding] = useState(true);
  useEffect(() => {
    // setIsHolding(holding);
    handleMobileVh();
  }, []);
  return (
    <>
      {/* <Holding holding={holding} launch={launch} /> */}
      {/* <Holding isHolding={isHolding} /> */}
      <Holding isHolding={holding} launchTime={launch} />
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
};

// export default withTransition(Home);
export default Home;
