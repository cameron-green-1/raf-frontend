import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Logo from '../components/logo';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
import withTransition from '../components/withTransition';

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
const instructionsText = [
  'TAP & DRAG TO',
  'DISCOVER A VARIETY',
  'OF RAF PROFESSIONS',
  'AROUND THE WORLD',
];
const instructionsItems = instructionsText.map((txt, i) => (
  <p style={{ textIndent: `${i / 2}em` }} key={i}>
    {txt}
  </p>
));

export async function getStaticProps() {
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
  // console.log(launch);
  return (
    <div className='wrapper'>
      <Head>
        <title>RAF Access All Areas</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <img src='/stars.jpg' className={styles.bg} />
      <main className='holding'>
        <img src='/logo.png' className='holding-logo' alt='' />
        <p>Sorry, RAF World is not currently live.</p>
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
      <div className='wrapper'>
        <Head>
          <title>RAF Access All Areas</title>
          <meta name='description' content='RAF Access All Areas experience' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <img src='/stars.jpg' className={styles.bg} />
        <header className={styles.header}>
          <Logo />
          <Countdown launch={launch} />
        </header>
        <div className={styles.instructions}>
          <div className={styles.line}></div>
          <div className={styles.items}>{instructionsItems}</div>
        </div>
        <Earth />
      </div>
    );
  }
}

export default withTransition(Home);
// export default Home;
