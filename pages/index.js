import Head from 'next/head';
import { useRouter } from 'next/router';
import useContentful from '../utils/useContentful';
import Image from 'next/image';
import useSWR from 'swr';
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
  debugPassword,
  debugHoldingLink,
  debugConfig,
  getDate,
  getTime,
  url,
} from '../utils/helpers';
import Logo from '../components/logo';
import styles from '../styles/Holding.module.css';
import dynamic from 'next/dynamic';
import Countdown from '../components/countdown';
// import withTransition from '../components/withTransition';

// const URL = process.env.STRAPIBASEURL;
const URL = url;

const Earth = dynamic(() => import('../components/earth'), { ssr: false });
const instructionsText = ['TAP & DRAG THE GLOBE', 'TO VISIT RAF OPERATIONS'];
const instructionsItems = instructionsText.map((txt, i) => (
  <p key={i}>{txt}</p>
));

// export async function getStaticProps() {
//   // export async function getInitialProps() {
//   // export async function getServerSideProps() {
//   try {
//     const resHolding = await fetch(`${URL}/api/holding`);
//     const resLaunch = await fetch(`${URL}/api/launch-time`);
//     const jsonHolding = await resHolding.json();
//     const jsonLaunch = await resLaunch.json();
//     const holding = jsonHolding.data.attributes.holding;
//     const launch = jsonLaunch.data.attributes.launch;
//     // const contentfulDemo = await fetch(
//     //   'https://cdn.contentful.com/spaces/yjnrxugnhvwu/environments/master/entries/74KRAy3QXQblm1croVqgSu?access_token=qIcENWNQUi9tOlz1kI5073aBeNDnvJPcT9wCOkvn7OQ'
//     // );
//     // const jsonContentfulDemo = await contentfulDemo.json();
//     // const fields = jsonContentfulDemo.fields;
//     // console.log(fields);
//     console.log(holding);
//     return {
//       props: { holding, launch },
//       // revalidate: 10,
//     };
//   } catch (err) {
//     // const holding = defaultHolding;
//     // const launch = defaultLaunch;
//     const holding = debugHolding;
//     const launch = debugLaunch;
//     return {
//       props: { holding, launch },
//     };
//   }
// }

const evaluatePassword = (e, router, holding, setIncorrectPass, password) => {
  e.preventDefault();
  if (holding) {
    window.open(debugHoldingLink, '_blank');
  } else {
    const input = document.getElementById('input-password');
    const inputPassword = input.value;
    if (inputPassword === password) {
      setIncorrectPass(false);
      router.push('/operations');
    } else {
      setIncorrectPass(true);
      input.value = '';
    }
  }
};

// const Holding = ({ isHolding, launchTime }) => {
const Holding = ({ isHolding, config }) => {
  const router = useRouter();
  const container = useRef(null);
  // const date = getDate(launchTime);
  // const time = getTime(launchTime);
  // const dateTime = `${date} @ ${time}`;
  const [incorrectPass, setIncorrectPass] = useState(false);
  const [holding, setHolding] = useState(true);
  const [password, setPassword] = useState(null);
  const [time, setTime] = useState(null);
  let date;
  useEffect(() => {
    handleMobileVh();
    setTimeout(() => {
      const animate = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/lottie-logo-3.json',
      });
      animate.setSpeed(1.5);
    }, 1000);
  }, []);
  useEffect(() => {
    console.log(config.launchTime);
    if (config.launchTime) {
      // Holding
      setHolding(config.holding);
      // Password
      setPassword(config.accessWord);
      // Launch time
      date = new Date(config.launchTime);
      console.log(date);
      const dateArr = date.toString().split(' ');
      console.log(dateArr);
      const time = dateArr[4];
      console.log(typeof time);
      const displayedTime = time.slice(0, -3);
      console.log(displayedTime);
      setTime(displayedTime);
    }
  }, [config]);
  return (
    <div className='wrapper'>
      <Head>
        <title>RAF World | Access All Areas</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <img src='/stars.jpg' className={styles.bg} />
      <main className={styles.holding}>
        <div className={styles.holdingLogo} ref={container}></div>
        <p>
          {
            // isHolding
            holding
              ? 'Sorry, RAF World is not currently live.'
              : // : 'Explore RAF World.'}
                'Explore RAF World - Archwiliwch RAF World'
          }
        </p>
        <p>
          {/* {isHolding ? (
            <>
              The next event is on <span>{dateTime}</span>
            </>
          ) : (
            <>
              The event starts at <span>{`@ ${time}`}</span>
            </>
          )} */}
          <>
            The event starts at <span>{`@ ${time}`}</span> on 22nd June.
          </>
        </p>
        <form
          onSubmit={(e) =>
            evaluatePassword(e, router, holding, setIncorrectPass, password)
          }
        >
          <input
            type='password'
            id='input-password'
            style={{ display: holding ? 'none' : 'block' }}
          />
          <button style={{ marginBottom: incorrectPass ? 0 : 80 }}>
            <span className={styles.buttonText}>
              {holding ? 'REGISTER NOW' : 'VISIT NOW'}
            </span>
          </button>
        </form>
        <p
          id='error-msg'
          style={{
            display: incorrectPass ? 'block' : 'none',
            marginBottom: incorrectPass ? 80 : 0,
          }}
        >
          Incorrect password
        </p>
        <img
          className={styles.holdingLogos}
          src='/holding-logos-4.png'
          alt='RAF Regular & Reserve | No Ordinary Job'
        />
      </main>
    </div>
  );
};

const Home = ({ holding, launch }) => {
  const { getChatRooms, getConfig, getLatestContent } = useContentful();
  const [config, setConfig] = useState(JSON.parse(JSON.stringify(debugConfig)));
  useEffect(async () => {
    handleMobileVh();
    setConfig(debugConfig);
    getConfig().then((res) => setConfig(res));
    // getChatRooms().then((res) => console.log(res));
    // getLatestContent().then((res) => console.log(res));
    // const configRetrieved = await getConfig();
    // if (configRetrieved) {
    //   setConfig(JSON.parse(JSON.stringify(configRetrieved)));
    // }
  }, []);
  return (
    <>
      {/* <Holding isHolding={isHolding} launchTime={launch} /> */}
      {/* <Holding isHolding={data} launchTime={launch} /> */}
      <Holding config={config} />
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
