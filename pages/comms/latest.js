import Head from 'next/head';
import { useEffect } from 'react';
import useSWR from 'swr';
import styles from '../../styles/Comms.module.css';
import Link from 'next/link';
import Logo from '../../components/logo';
import Countdown from '../../components/countdown';
import Back from '../../components/back';
import { motion } from 'framer-motion';
import { debugLaunch, debugLive, debugLatest, url } from '../../utils/helpers';

// const URL = process.env.STRAPIBASEURL;
const URL = url;

// export async function getStaticProps() {
export async function getServerSideProps() {
  try {
    const resLaunch = await fetch(`${URL}/api/launch-time`);
    const jsonLaunch = await resLaunch.json();
    const launch = jsonLaunch.data.attributes.launch;

    const resLive = await fetch(`${URL}/api/live`);
    const jsonLive = await resLive.json();
    const live = jsonLive.data.attributes.live;

    const resLatest = await fetch(`${URL}/api/latest-contents`);
    const jsonLatest = await resLatest.json();
    const arrayLatest = jsonLatest.data;
    const index = arrayLatest.length - 1;
    const latest = JSON.parse(JSON.stringify(arrayLatest[index].attributes));

    return {
      props: { launch, live, latest },
    };
  } catch (err) {
    const launch = debugLaunch;
    const live = debugLive;
    const latest = JSON.parse(JSON.stringify(debugLatest));
    return {
      props: { launch, live, latest },
    };
  }
}

// const debugVimeoLink = 'https://player.vimeo.com/video/514470296?h=a7bd2f8234';

// const vimeoEmbed = (
//   <iframe
//     src={debugVimeoLink}
//     frameBorder='0'
//     allow='autoplay; fullscreen; picture-in-picture'
//     allowFullScreen
//     className='vimeo-latest'
//   ></iframe>
// );

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  // console.log(json);
  const data = json.data.attributes.live;
  // console.log('data from fetcher is ', data);
  return data;
};

const Latest = ({ launch, live, latest }) => {
  const { data, error } = useSWR(`${URL}/api/live`, fetcher, {
    fallbackData: live,
  });
  // if (error) console.log(error);
  if (!data) console.log('loading...');
  const arr = latest.video.split('/');
  const id = arr[arr.length - 1];
  const vimeoEmbed = (
    <iframe
      src={`https://player.vimeo.com/video/${id}?h=a7bd2f8234`}
      frameBorder='0'
      allow='autoplay; fullscreen; picture-in-picture'
      allowFullScreen
      className='vimeo-latest'
    ></iframe>
  );
  return (
    <>
      <Head>
        <title>RAF World | Latest Content</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='wrapper live'>
        <img src='/raf4.jpg' className={styles.backgroundImage} />
        <div className={styles.container}>
          <header className={styles.header}>
            <Logo />
            {/* <Countdown launch={launch} live={live} changeToIcon={true} /> */}
            <Countdown launch={launch} live={data} changeToIcon={true} />
          </header>
          <main className={styles.main}>
            <div className={[styles.flex, styles.latestFlex].join(' ')}>
              <div className={styles.title}>FROM THE STUDIO</div>
              <div className={[styles.title, styles.video].join(' ')}>
                DESCRIPTION
              </div>

              <div className={styles.latestContent}>
                {/* <img src='/from-studio.jpg' alt='' className={styles.cover}></img> */}
                <div className={styles.episode}>{latest.title}</div>
                {vimeoEmbed}
              </div>
              <div className={styles.latestChat}>
                <p>{latest.description}</p>
              </div>
            </div>
          </main>
          <div className={styles.empty}></div>
          <footer className={styles.footer}>
            <Back text='BACK TO THE COMMS ROOM' />
          </footer>
        </div>
        {/* <div className={styles.backContainer}>
          <Back text='BACK TO THE COMMS ROOM' />
        </div> */}
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
};

export default Latest;
