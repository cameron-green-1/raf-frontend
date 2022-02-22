import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
// import withTransition from '../components/withTransition';

const PanoViewer = dynamic(() => import('../components/panoViewer'), {
  ssr: false,
});

const Scenario = () => (
  <>
    <PanoViewer imageSrc='/pano1.jpg' />{' '}
    <motion.div
      className='slide-in'
      initial={{ y: '100%' }}
      animate={{ y: '100%' }}
      exit={{ y: 0 }}
      transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
    />
    <motion.div
      className='slide-out'
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      exit={{ y: '-100%' }}
      transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
    />
  </>
);

// export default withTransition(Scenario);
export default Scenario;
