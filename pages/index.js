import Head from 'next/head';
import Image from 'next/image';
import Logo from '../components/logo';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';

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
  try {
    const res = await fetch('http://localhost:1337/api/launch-time');
    const json = await res.json();
    const launch = json.data.attributes.launch;
    // console.log(launch);
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

export default function Home({ launch }) {
  return (
    <div className='wrapper'>
      <Head>
        <title>RAF Access All Areas</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <img src='/stars2.jpg' className={styles.bg} />
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
