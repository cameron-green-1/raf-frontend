import styles from '../../styles/Comms.module.css';
import Link from 'next/link';
import Logo from '../../components/logo';
import Countdown from '../../components/countdown';
import Back from '../../components/back';
import { motion } from 'framer-motion';

const Latest = () => {
  return (
    <>
      <div className='wrapper live'>
        <img src='/raf4.jpg' className={styles.backgroundImage} />
        <div className={styles.container}>
          <header className={styles.header}>
            <Logo />
            <Countdown />
          </header>
          <div className={styles.name}>Episode One</div>
          <div className={styles.flex}>
            <div className={styles.title}>FROM THE STUDIO</div>
            <div className={[styles.title, styles.video].join(' ')}>
              DESCRIPTION
            </div>

            <div className={styles.content}>
              <img src='/from-studio.jpg' alt='' className={styles.cover}></img>
            </div>
            <div className={styles.chat}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip
              </p>
            </div>
          </div>
        </div>
        <div className={styles.backContainer}>
          <Back text='BACK TO THE COMMS ROOM' />
        </div>
      </div>
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
};

export default Latest;
