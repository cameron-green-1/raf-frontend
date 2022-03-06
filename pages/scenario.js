import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Brief from '../components/brief';
import { motion } from 'framer-motion';
import { handleMobileVh, slideIn, slideOut } from '../utils/helpers';
// import withTransition from '../components/withTransition';

const PanoViewer = dynamic(() => import('../components/panoViewer'), {
  ssr: false,
});

const vimeoEmbed = (
  <iframe
    src='https://player.vimeo.com/video/514470296?h=a7bd2f8234'
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

const Scenario = () => {
  useEffect(() => {
    handleMobileVh();
  });
  return (
    <>
      <PanoViewer imageSrc='/pano1min.jpg' hotspots={hotspots} />{' '}
      {/* <Brief /> */}
      {slideIn}
      {slideOut}
      {/* <motion.div
        className='slide'
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.div
        className='slide'
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      /> */}
    </>
  );
};

// export default withTransition(Scenario);
export default Scenario;
