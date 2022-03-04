import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import { handleMobileVh } from '../utils/helpers';
import Logo from '../components/logo';
import styles from '../styles/Holding.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
// import withTransition from '../components/withTransition';

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

function Holding({ holding, launch }) {
  const container = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/lottie-logo.json',
      });
    }, 1000);
  }, []);
  return (
    <div className='wrapper'>
      <Head>
        <title>RAF Access All Areas</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <img src='/stars.jpg' className={styles.bg} />
      <main className={styles.holding}>
        <div className={styles.holdingLogo} ref={container}></div>
        <p style={{ marginTop: 60, display: holding ? 'block' : 'none' }}>
          Sorry, RAF World is not currently live.
        </p>
        <p>
          The next event is on the <span>6th April @ 6:30pm</span>
        </p>
        <Link
          href={
            holding
              ? 'https://www.raf.mod.uk/recruitment/find-your-role?gclid=CjwKCAiAjoeRBhAJEiwAYY3nDMXctPPv8gXRKpG53HH6kys5YSiBfrt3IUmShmy6ekuR0cyCILRQjxoCfqUQAvD_BwE&gclsrc=aw.ds'
              : '/operations'
          }
        >
          <button>{holding ? 'REGISTER NOW' : 'VISIT NOW'}</button>
        </Link>
        <img
          src='/holding-logos.png'
          alt='RAF Regular & Reserve | No Ordinary Job'
        />
      </main>
    </div>
  );
}

function Home({ launch }) {
  useEffect(() => {
    handleMobileVh();
  }, []);
  const [holding, setHolding] = useState(false);
  return (
    <>
      <Holding holding={holding} launch={launch} />
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

// export default withTransition(Home);
export default Home;
