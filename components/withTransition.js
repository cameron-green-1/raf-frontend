import { motion } from 'framer-motion';
// import {useEffect} from 'react'
import { useRouter } from 'next/router';

const withTransition = (OriginalComponent) => {
  // console.log('animDelay = ' + animDelay);
  // console.log(OriginalComponent);
  // const { pathname } = useRouter();
  // console.log(pathname);
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className='slide-in'
        // initial={{ scaleY: 0 }}
        // animate={{ scaleY: 0 }}
        // exit={{ scaleY: 1 }}
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      <motion.div
        className='slide-out'
        // initial={{ scaleY: 1 }}
        // animate={{ scaleY: 0 }}
        // exit={{ scaleY: 0 }}
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      />
    </>
  );
};

export default withTransition;
