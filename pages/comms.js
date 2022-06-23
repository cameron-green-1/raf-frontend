import Head from 'next/head';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import useContentful from '../utils/useContentful';
import Script from 'next/script';
import {
  debugHoldingSwitch,
  debugLaunch,
  debugLive,
  debugLatest,
  debugRooms,
  debugConfig,
  getTime,
  url,
} from '../utils/helpers';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../components/logo';
import styles from '../styles/Comms.module.css';
import { motion } from 'framer-motion';
import Countdown from '../components/countdown';
import Back from '../components/back';
import Loader from '../components/loader';
// import withTransition from '../components/withTransition';

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

//     const resRooms = await fetch(`${URL}/api/chat-rooms`);
//     const jsonRooms = await resRooms.json();
//     const rooms = [...jsonRooms.data];
//     return {
//       props: { launch, live, latest, rooms },
//     };
//   } catch (err) {
//     console.log(err);
//     const launch = debugLaunch;
//     const live = debugLive;
//     const latest = JSON.parse(JSON.stringify(debugLatest));
//     const rooms = [...debugRooms];
//     return {
//       props: { launch, live, latest, rooms },
//       // revalidate: 10,
//     };
//   }
// }

// const Chat = ({ rooms }) => {
const Chat = ({ chatRooms }) => {
  useEffect(() => {
    console.log('chat component');
    console.log(chatRooms);
  }, [chatRooms]);
  return (
    <>
      <div className={styles.chat}>
        <p>
          {/* We’re now <span style={{ color: '#C60C30' }}>LIVE!</span> Join a teams
          video chat room below to speak with RAF personnel and find out more
          about a specific role. */}
          We’re <span style={{ color: '#C60C30' }}>live!</span> Discover a world
          of opportunities within the RAF.
        </p>
        <ul className={styles.rooms}>
          {/* {rooms.length > 0 ? ( */}
          {/* {chatRooms.length > 0 ? ( */}
          {chatRooms ? (
            // rooms.map((room, i) => {
            chatRooms.map((room, i) => {
              return (
                <a
                  // href={room.attributes.link}
                  // href={room.link}
                  href={room.teamsLink}
                  key={i}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <li className={styles.room}>
                    <img src='./share.png' alt='' />
                    {/* <p>{room.attributes.name}</p> */}
                    {/* <p>{room.name}</p> */}
                    <p>{room.title}</p>
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
        {/* <p>
          If you’d prefer to ask a question via text chat, please click the
          green speech bubble below.
        </p> */}
        {/* <button className={styles.buttonChat}> */}
        <button className={styles.buttonChat} onClick={() => Tawk_API.toggle()}>
          <img src='/bubble.png' alt='' />
          <p>LIVE TEXT CHAT</p>
        </button>
      </div>
    </>
  );
};

// const fetcher = async (url) => {
//   const res = await fetch(url);
//   const json = await res.json();
//   // console.log(json);
//   const data = json.data.attributes.live;
//   // console.log('data from fetcher is ', data);
//   return data;
// };

const Comms = ({ launch, live, latest, rooms }) => {
  // // const [live, setLive] = useState(false);
  // const { data, error } = useSWR(`${URL}/api/live`, fetcher, {
  //   fallbackData: live,
  // });
  // // if (error) console.log(error);
  // if (!data) console.log('loading...');
  // const time = getTime(launch);
  // const images = [
  //   <img src='/grid1.jpg' key={0} alt='' className={styles.thumbnail} />,
  //   <img src='/grid2.jpg' key={1} alt='' className={styles.thumbnail} />,
  //   <img src='/grid3.jpg' key={2} alt='' className={styles.thumbnail} />,
  //   <img src='/grid4.jpg' key={3} alt='' className={styles.thumbnail} />,
  //   <img src='/grid5.jpg' key={4} alt='' className={styles.thumbnail} />,
  //   <img src='/grid6.jpg' key={5} alt='' className={styles.thumbnail} />,
  //   <img src='/grid7.jpg' key={6} alt='' className={styles.thumbnail} />,
  //   <img src='/grid8.jpg' key={7} alt='' className={styles.thumbnail} />,
  // ];
  const router = useRouter();
  const [config, setConfig] = useState(debugConfig);
  const [chatRooms, setChatRooms] = useState(null);
  const [latestContent, setLatestContent] = useState(null);
  const [time, setTime] = useState(null);
  const { getConfig, getChatRooms, getLatestContent } = useContentful();
  useEffect(() => {
    if (debugHoldingSwitch) router.push('/');
    setConfig(debugConfig);
    getConfig().then((res) => setConfig(res));
    // setChatRooms(debugRooms);
    getChatRooms().then((res) => setChatRooms(res));
    // setLatestContent(debugLatest);
    getLatestContent().then((res) => setLatestContent(res));
    // const configRetrieved = await getConfig();
    // const roomsRetrieved = await getChatRooms();
    // const latestContentRetrieved = await getLatestContent();
    // if (configRetrieved) {
    //   console.log('config retrieved');
    //   setConfig(configRetrieved);
    // }
    // if (roomsRetrieved) {
    //   console.log('rooms retrieved');
    //   setChatRooms(roomsRetrieved);
    //   console.log(roomsRetrieved);
    //   console.log(chatRooms);
    // }
    // if (latestContentRetrieved) {
    //   console.log('latest content retrieved');
    //   setLatestContent(latestContentRetrieved);
    //   console.log(latestContentRetrieved);
    //   console.log(latestContent);
    // }

    // var Tawk_API = Tawk_API || {},
    //   Tawk_LoadStart = new Date();
    // (function () {
    //   var s1 = document.createElement('script'),
    //     s0 = document.getElementsByTagName('script')[0];
    //   s1.async = true;
    //   s1.src = 'https://embed.tawk.to/5f16a9eda45e787d128bd52b/default';
    //   s1.charset = 'UTF-8';
    //   s1.setAttribute('crossorigin', '*');
    //   s0.parentNode.insertBefore(s1, s0);
    // })();

    // const script = document.createElement('script');
    // script.id = 'tawkId';
    // script.async = true;
    // script.src =
    //   'https://embed.tawk.to/' + '5f16a9eda45e787d128bd52b' + '/default';
    // script.charset = 'UTF-8';
    // script.setAttribute('crossorigin', '*');
    // document.body.appendChild(script);
  }, []);
  useEffect(() => {
    const date = new Date(config.launchTime);
    // console.log(date);
    const dateArr = date.toString().split(' ');
    // console.log(dateArr);
    const time = dateArr[4];
    // console.log(typeof time);
    const displayedTime = time.slice(0, -3);
    // console.log(displayedTime);
    setTime(displayedTime);
  }, [config]);
  return (
    <>
      {/* <head> */}
      {/* <Script
            strategy='lazyOnload'
            id='my-script-6'
          >
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5f16a9eda45e787d128bd52b/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    </Script> */}
      {/* <Script
        strategy='lazyOnload'
        src='https://embed.tawk.to/5f16a9eda45e787d128bd52b/default'
      /> */}
      {/* </head> */}
      <head>
        <Script strategy='lazyOnload' id='tawk'>
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5f16a9eda45e787d128bd52b/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `}
        </Script>
      </head>
      <Head>
        <title>RAF World | Comms Room</title>
        <meta name='description' content='RAF Access All Areas experience' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel='icon' href='/favicon3.png' />
      </Head>
      <div className='wrapper live'>
        <img src='/raf4.jpg' className={styles.backgroundImage} />
        <div className={styles.container}>
          <header className={styles.header}>
            <div>
              <Logo />
              <a
                // href='https://www.raf.mod.uk/recruitment/apply?utm_source=virtual_event&utm_medium=referral&utm_campaign=RAF&utm_content=RAFWorld-Event-Application-84334'
                // href={config.applyNowLink}
                href={config.applyNowLink || debugConfig.applyNowLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='apply-now'>APPLY NOW</button>
              </a>
            </div>
            {/* <Countdown launch={launch} live={live} changeToIcon={false} /> */}
            {/* <Countdown launch={launch} live={data} changeToIcon={false} /> */}
            <Countdown
              launch={config.launchTime}
              live={config.live}
              changeToIcon={false}
            />
          </header>
          <main className={styles.main}>
            {/* <div className={styles.name}>The Comms Room</div> */}
            <div className={styles.name}>THE COMMS ROOM</div>
            <div className={styles.flex}>
              {/* <div className={styles.title}>LATEST CONTENT</div> */}
              <div className={styles.title}>LIVE FROM THE RAF PANEL</div>
              <div className={[styles.title, styles.video].join(' ')}>
                {live ? 'LIVE VIDEO CHAT ROOM' : 'LIVE CHAT'}
              </div>

              <div className={styles.content}>
                <Link href='/comms/latest'>
                  <img
                    // src='/from-studio.jpg'
                    // src={latest && latest.image}
                    src={
                      latestContent
                        ? latestContent.image.fields.file.url
                        : debugLatest.image
                    }
                    alt=''
                    className={styles.cover}
                  ></img>
                </Link>
              </div>
              {/* {true ? ( */}
              {config.live ? (
                <Chat chatRooms={chatRooms} />
              ) : (
                // <div className={styles.chat} style={{ maxWidth: 500 }}>
                <div className={styles.chat}>
                  {/* <p>
                    <span>We are currently offline</span>. Live chat opens{' '}
                    <span>{`@ ${time}`}</span>. Whilst you wait, watch our
                    latest content ‘From the Studio’ or explore RAF operations
                    and professions from the home page.
                  </p> */}
                  {/* <p>
                    <span>We are currently offline</span>. Live chat opens{' '}
                    <span>{`@ ${time}`}</span>. Whilst you wait, watch our
                    latest content ‘From the Studio’ or explore RAF operations
                    and professions from the home page.
                  </p> */}
                  <p style={{ marginBottom: 20 }}>
                    Our main event starts at <span>18:30</span>, where you will
                    be able to chat to our RAF personnel, right here.
                  </p>
                  <p>
                    While you wait, please watch our ‘Live from the RAF Panel’
                    or explore our 360° RAF operations from the home page.
                  </p>
                </div>
              )}
              {/* <Chat /> */}
            </div>
          </main>
          <div className={styles.empty}></div>
          <footer className={styles.footer}>
            <Back commsExtra={true} />
          </footer>
        </div>
        {/* <div className={styles.backContainer}>
          <Back />
        </div> */}
        {/* <Loader /> */}
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
