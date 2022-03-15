import Head from 'next/head';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import Brief from '../components/brief';
import { motion } from 'framer-motion';
import { handleMobileVh, debugLaunch, debugLive, url } from '../utils/helpers';
// import withTransition from '../components/withTransition';

// const URL = process.env.STRAPIBASEURL;
const URL = url;

const PanoViewer = dynamic(() => import('../components/panoViewer'), {
  ssr: false,
});

const vimeoEmbed = (
  <iframe
    // src='https://player.vimeo.com/video/514470296?h=a7bd2f8234'
    // src='https://player.vimeo.com/video/684641383?h=a7bd2f8234'
    src='https://player.vimeo.com/video/684564506?h=a7bd2f8234'
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo'
  ></iframe>
);

const hotspots = [
  {
    type: 'video',
    title: 'General Technician',
    link: vimeoEmbed,
    description:
      'As a General Technician (Workshops) you will manufacture and repair parts for aircraft, vehicles and specialist equipment. You will be working in specially equipped workshops and aircraft maintenance hangars.',
    img: null,
    position: [-10, 0, 5],
    sprite: '/scenario-hotspot.png',
  },
  // {
  //   type: 'video',
  //   title: 'General Technician',
  //   link: vimeoEmbed,
  //   description:
  //     'As a General Technician (Workshops) you will manufacture and repair parts for aircraft, vehicles and specialist equipment. You will be working in specially equipped workshops and aircraft maintenance hangars.',
  //   img: null,
  //   position: [5, 0, 5],
  //   sprite: '/scenario-hotspot.png',
  // },
  {
    type: 'pdf',
    title: 'General Technician',
    link: '/dummy.pdf',
    description:
      'As a General Technician (Workshops) you will manufacture and repair parts for aircraft, vehicles and specialist equipment. You will be working in specially equipped workshops and aircraft maintenance hangars.',
    img: '/general-technician.jpg',
    position: [10, 0, 5],
    sprite: '/scenario-hotspot.png',
  },
  {
    type: 'link',
    title: 'General Technician',
    link: 'https://www.raf.mod.uk/recruitment/roles/roles-finder/technical-and-engineering/general-technician-workshop',
    description:
      'As a General Technician (Workshops) you will manufacture and repair parts for aircraft, vehicles and specialist equipment. You will be working in specially equipped workshops and aircraft maintenance hangars.',
    img: '/general-technician.jpg',
    position: [-8, 0, -8],
    sprite: '/scenario-hotspot.png',
  },
];

// export async function getStaticProps() {
export async function getServerSideProps() {
  try {
    const resLaunch = await fetch(`${URL}/api/launch-time`);
    const resLive = await fetch(`${URL}/api/live`);
    const jsonLaunch = await resLaunch.json();
    const jsonLive = await resLive.json();
    const launch = jsonLaunch.data.attributes.launch;
    const live = jsonLive.data.attributes.live;
    return {
      props: { launch, live },
    };
  } catch (err) {
    const launch = debugLaunch;
    const live = debugLive;
    return {
      props: { launch, live },
    };
  }
}

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  // console.log(json);
  const data = json.data.attributes.live;
  // console.log('data from fetcher is ', data);
  return data;
};

const Scenario = ({ launch, live }) => {
  const { data, error } = useSWR(`${URL}/api/live`, fetcher, {
    fallbackData: live,
  });
  // if (error) console.log(error);
  if (!data) console.log('loading...');
  useEffect(() => {
    handleMobileVh();
  });
  return (
    <>
      <Head>
        <title>RAF World | Scenario</title>
        <meta name='description' content='RAF Access All Areas experience' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PanoViewer
        imageSrc='/pano1min.jpg'
        hotspots={hotspots}
        launch={launch}
        // live={live}
        live={data}
      />{' '}
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

// export default withTransition(Scenario);
export default Scenario;
