import Head from 'next/head';
import { useState, useEffect } from 'react';
import {
  debugLaunch,
  debugLive,
  debugLatest,
  debugRooms,
  getTime,
  url,
} from '../utils/helpers';
import Link from 'next/link';
import Logo from '../components/logo';
import styles from '../styles/Comms.module.css';
import { motion } from 'framer-motion';
import Countdown from '../components/countdown';
import Back from '../components/back';
// import withTransition from '../components/withTransition';

// const URL = process.env.STRAPIBASEURL;
const URL = url;

export async function getStaticProps() {
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

    const resRooms = await fetch(`${URL}/api/chat-rooms`);
    const jsonRooms = await resRooms.json();
    const rooms = [...jsonRooms.data];
    return {
      props: { launch, live, latest, rooms },
    };
  } catch (err) {
    console.log(err);
    const launch = debugLaunch;
    const live = debugLive;
    const latest = JSON.parse(JSON.stringify(debugLatest));
    const rooms = [...debugRooms];
    return {
      props: { launch, live, latest, rooms },
    };
  }
}

const Chat = ({ rooms }) => {
  // rooms = [];
  return (
    <>
      <div className={styles.chat}>
        <p>
          We’re now <span style={{ color: '#C60C30' }}>LIVE!</span> Join a teams
          video chat room below to speak with RAF personnel and find out more
          about a specific role.
        </p>
        <ul className={styles.rooms}>
          {rooms.length > 0 ? (
            rooms.map((room, i) => {
              return (
                <a
                  href={room.attributes.link}
                  key={i}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <li className={styles.room}>
                    <img src='./share.png' alt='' />
                    <p>{room.attributes.name}</p>
                    <div>LIVE</div>
                  </li>
                </a>
              );
            })
          ) : (
            <p>
              <span style={{ color: '#C60C30' }}>
                No rooms are currently available
              </span>
              . Please check back later.
            </p>
          )}
        </ul>
      </div>
      <div></div>
      <div className={styles.question}>
        <div className={styles.title}>ASK A QUESTION</div>
        <p>
          If you’d prefer to ask a question via text chat, please click below:
        </p>
        <button className={styles.buttonChat}>
          <img src='/bubble.png' alt='' />
          <p>LIVE TEXT CHAT</p>
        </button>
      </div>
    </>
  );
};

const Comms = ({ launch, live, latest, rooms }) => {
  // const [live, setLive] = useState(false);
  const time = getTime(launch);
  const images = [
    <img src='/grid1.jpg' key={0} alt='' className={styles.thumbnail} />,
    <img src='/grid2.jpg' key={1} alt='' className={styles.thumbnail} />,
    <img src='/grid3.jpg' key={2} alt='' className={styles.thumbnail} />,
    <img src='/grid4.jpg' key={3} alt='' className={styles.thumbnail} />,
    <img src='/grid5.jpg' key={4} alt='' className={styles.thumbnail} />,
    <img src='/grid6.jpg' key={5} alt='' className={styles.thumbnail} />,
    <img src='/grid7.jpg' key={6} alt='' className={styles.thumbnail} />,
    <img src='/grid8.jpg' key={7} alt='' className={styles.thumbnail} />,
  ];
  useEffect(() => {
    // setLive(debugLive);
  }, []);
  return (
    <>
      <Head>
        <title>RAF World | Comms Room</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='wrapper live'>
        <img src='/raf4.jpg' className={styles.backgroundImage} />
        <div className={styles.container}>
          <header className={styles.header}>
            <Logo />
            <Countdown launch={launch} live={live} changeToIcon={false} />
          </header>
          <main className={styles.main}>
            <div className={styles.name}>The Comms Room</div>
            <div className={styles.flex}>
              <div className={styles.title}>LATEST CONTENT</div>
              <div className={[styles.title, styles.video].join(' ')}>
                {live ? 'LIVE VIDEO CHAT ROOM' : 'LIVE CHAT'}
              </div>

              <div className={styles.content}>
                <Link href='/comms/latest'>
                  <img
                    // src='/from-studio.jpg'
                    src={latest && latest.image}
                    alt=''
                    className={styles.cover}
                  ></img>
                </Link>
              </div>
              {live ? (
                <Chat rooms={rooms} />
              ) : (
                <div className={styles.chat}>
                  <p>
                    <span>We are currently offline</span>. Live chat opens{' '}
                    <span>{`@ ${time}`}</span>. Whilst you wait, watch our
                    latest content ‘From the Studio’ or explore RAF operations
                    and professions from the home page.
                  </p>
                </div>
              )}
              {/* <Chat /> */}
            </div>
          </main>
          <div className={styles.empty}></div>
          <footer className={styles.footer}>
            <Back />
          </footer>
        </div>
        {/* <div className={styles.backContainer}>
          <Back />
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

// export default withTransition(Live);
export default Comms;
