import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { handleMobileVh, debugLaunch, debugLive, url } from '../utils/helpers';

const URL = url;

const PanoViewer = dynamic(() => import('../components/panoViewer'), {
  ssr: false,
});

export async function getStaticProps() {
  try {
    const resLaunch = await fetch(`${URL}/api/launch-time`);
    const resLive = await fetch(`${URL}/api/live`);
    const jsonLaunch = await resLaunch.json();
    const jsonLive = await resLive.json();
    const launch = jsonLaunch.data.attributes.launch;
    const live = jsonLive.data.attributes.live;
    return {
      props: { launch, live },
      revalidate: 10,
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
  const data = json.data.attributes.live;
  return data;
};

const ScenarioTemplate = ({ launch, live, hotspots, imageSrc, scenario }) => {
  const { data, error } = useSWR(`${URL}/api/live`, fetcher, {
    fallbackData: live,
  });
  useEffect(() => {
    handleMobileVh();
    console.log(scenario);
  });
  return (
    <>
      <PanoViewer
        // imageSrc='/pano1min.jpg'
        imageSrc={imageSrc}
        hotspots={hotspots}
        scenario={scenario}
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

export default ScenarioTemplate;
