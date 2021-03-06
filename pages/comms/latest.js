import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import useContentful from '../../utils/useContentful';
import { useRouter } from 'next/router';
import styles from '../../styles/Comms.module.css';
import Link from 'next/link';
import Logo from '../../components/logo';
import Countdown from '../../components/countdown';
import Back from '../../components/back';
import { motion } from 'framer-motion';
import {
  debugHoldingSwitch,
  debugLaunch,
  debugLive,
  debugLatest,
  debugConfig,
  url,
} from '../../utils/helpers';

// const URL = process.env.STRAPIBASEURL;
const URL = url;

// export async function getStaticProps() {
//   // export async function getServerSideProps() {
//   try {
//     const resLaunch = await fetch(`${URL}/api/launch-time`);
//     const jsonLaunch = await resLaunch.json();
//     const launch = jsonLaunch.data.attributes.launch;

//     const resLive = await fetch(`${URL}/api/live`);
//     const jsonLive = await resLive.json();
//     const live = jsonLive.data.attributes.live;

//     const resLatest = await fetch(`${URL}/api/latest-contents`);
//     const jsonLatest = await resLatest.json();
//     const arrayLatest = jsonLatest.data;
//     const index = arrayLatest.length - 1;
//     const latest = JSON.parse(JSON.stringify(arrayLatest[index].attributes));

//     return {
//       props: { launch, live, latest },
//     };
//   } catch (err) {
//     const launch = debugLaunch;
//     const live = debugLive;
//     const latest = JSON.parse(JSON.stringify(debugLatest));
//     return {
//       props: { launch, live, latest },
//       revalidate: 10,
//     };
//   }
// }

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

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   // console.log(json);
//   const data = json.data.attributes.live;
//   // console.log('data from fetcher is ', data);
//   return data;
// };

const Latest = ({ launch, live, latest }) => {
  // const { data, error } = useSWR(`${URL}/api/live`, fetcher, {
  //   fallbackData: live,
  // });
  // if (error) console.log(error);
  // if (!data) console.log('loading...');
  const router = useRouter();
  const [config, setConfig] = useState(debugConfig);
  const [latestContent, setLatestContent] = useState(null);
  const [vimeoId, setVimeoId] = useState(null);
  let latestContentRetrieved;
  const { getConfig, getLatestContent } = useContentful();
  useEffect(async () => {
    if (debugHoldingSwitch) router.push('/');
    setConfig(debugConfig);
    getConfig().then((res) => setConfig(res));
    getLatestContent().then((res) => setLatestContent(res));
    // const configRetrieved = await getConfig();
    // latestContentRetrieved = await getLatestContent();
    // if (configRetrieved) {
    //   console.log('config retrieved');
    //   setConfig(configRetrieved);
    // }
    // if (latestContentRetrieved) {
    //   console.log('latest content retrieved');
    //   setLatestContent(latestContentRetrieved);
    //   console.log(latestContentRetrieved);
    //   console.log(latestContent);
    // }
  }, []);
  // let id = '719458580';
  let id =
    'https://player.vimeo.com/video/722584439?h=9cc8a417e6&title=0&byline=0&portrait=0';
  useEffect(() => {
    // latestContentRetrieved = await getLatestContent();
    // setLatestContent(latest)
    // const arr = latestContent.vimeoLink.split('/');
    // id = arr[arr.length - 1];
    // if (latestContent) {
    if (latestContent !== null) {
      // const arr = latestContent.vimeoLink.split('/');
      // id = arr[arr.length - 2];
      const arr = latestContent.vimeoEmbed.split('src="');
      id = arr[1];
      // console.log(id);
    }
    setVimeoId(id);
  }, [latestContent]);
  // const arr = latest.video.split('/');
  // const id = arr[arr.length - 1];
  // const vimeoEmbed = (
  //   <iframe
  //     // src={`https://player.vimeo.com/video/${id}?h=a7bd2f8234`}
  //     // src={`https://player.vimeo.com/video/719458580?h=a7bd2f8234`}
  //     src={`https://player.vimeo.com/video/${vimeoId}?h=a7bd2f8234`}
  //     frameBorder='0'
  //     allow='autoplay; fullscreen; picture-in-picture'
  //     allowFullScreen
  //     className='vimeo-latest'
  //   ></iframe>
  // );
  const vimeoLive = (
    <iframe
      // src='https://player.vimeo.com/video/722584439?h=9cc8a417e6&title=0&byline=0&portrait=0'
      // src={`https://player.vimeo.com/video/${vimeoId}?h=9cc8a417e6&title=0&byline=0&portrait=0`}
      // src='https://vimeo.com/event/2227105/'
      src={vimeoId}
      // width='640'
      // height='360'
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
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <div className='wrapper live'>
        <img src='/raf4.jpg' className={styles.backgroundImage} />
        <div className={styles.container}>
          <header className={styles.header}>
            <Logo />
            {/* <Countdown launch={launch} live={live} changeToIcon={true} /> */}
            {/* <Countdown launch={launch} live={data} changeToIcon={true} /> */}
            <Countdown
              launch={config.launchTime}
              live={config.live}
              changeToIcon={true}
            />
          </header>
          <main className={styles.main}>
            {latestContent ? (
              <div className={[styles.flex, styles.latestFlex].join(' ')}>
                {/* <div className={styles.title}>FROM THE STUDIO</div> */}
                <div className={styles.title}>LIVE FROM THE RAF PANEL</div>
                <div className={[styles.title, styles.video].join(' ')}>
                  DESCRIPTION
                </div>

                <div className={styles.latestContent}>
                  <>
                    {/* <img
                        src='/from-studio.jpg'
                        alt=''
                        className={styles.cover}
                      ></img> */}
                    {/* <div className={styles.episode}>{latestContent.title}</div> */}
                    <div className={styles.episode}></div>
                    {/* {vimeoEmbed} */}
                    {vimeoLive}
                  </>
                </div>
                <div className={styles.latestChat}>
                  {<p>{latestContent.description}</p>}
                </div>
              </div>
            ) : (
              <p>
                <div className={[styles.flex, styles.latestFlex].join(' ')}>
                  <div className={styles.title}>FROM THE STUDIO</div>
                  <div className={[styles.title, styles.video].join(' ')}>
                    DESCRIPTION
                  </div>

                  <div className={styles.latestContent}>
                    <>
                      {/* <img
                        src='/from-studio.jpg'
                        alt=''
                        className={styles.cover}
                      ></img> */}
                      <div className={styles.episode}>{debugLatest.title}</div>
                      <div className={styles.episode}></div>
                      {vimeoLive}
                    </>
                  </div>
                  <div className={styles.latestChat}>
                    {<p>{debugLatest.description}</p>}
                  </div>
                </div>
              </p>
            )}
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
