import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import Logo from '../components/logo';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
// import withTransition from '../components/withTransition';

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
const instructionsText = ['TAP & DRAG THE GLOBE', 'TO VISIT RAF OPERATIONS'];
const instructionsItems = instructionsText.map((txt, i) => (
  // <p style={{ textIndent: `${i / 2}em` }} key={i}>
  <p key={i}>{txt}</p>
));

export async function getStaticProps() {
  // export async function getServerSideProps() {
  console.log('ayy');
  try {
    const res = await fetch('http://localhost:1337/api/launch-time');
    const json = await res.json();
    const launch = json.data.attributes.launch;
    console.log(launch);
    return {
      props: { launch },
    };
  } catch (err) {
    // console.log(err);
    const launch = '2023-06-08T19:00:00.000Z';
    return {
      props: { launch },
    };
  }
}

function Holding({ launch }) {
  const container = useRef(null);

  // console.log(lottie);

  useEffect(() => {
    // const container = document.querySelector('.lottie-logo');
    setTimeout(() => {
      lottie.loadAnimation({
        container: container.current,
        // container,
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
      <main className='holding'>
        {/* <img src='/logo.png' className='holding-logo' alt='' /> */}
        <div className='holding-logo' ref={container}></div>
        {/* <div className='lottie-logo'></div> */}
        <p style={{ marginTop: 60 }}>Sorry, RAF World is not currently live.</p>
        <p>
          The next event is on the <span>6th April @ 6:30pm</span>
        </p>
        <button>REGISTER NOW</button>
        <img
          src='/holding-logos.png'
          alt='RAF Regular & Reserve | No Ordinary Job'
        />
      </main>
    </div>
  );
}

function Home({ launch }) {
  // console.log(launch);
  const [holding, setHolding] = useState(false);
  if (holding) {
    return <Holding launch={launch} />;
  } else {
    return (
      <>
        <div className='wrapper'>
          <Head>
            <title>RAF Access All Areas</title>
            <meta
              name='description'
              content='RAF Access All Areas experience'
            />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <img src='/stars.jpg' className={styles.bg} />
          <header className={styles.header}>
            <Logo className={styles.logo} />
            <Countdown launch={launch} />
          </header>
          <div className={styles.instructions}>
            {/* <div className={styles.line}></div> */}
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
}

// export default withTransition(Home);
export default Home;
