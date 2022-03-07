import styles from '../../styles/Comms.module.css';
import Link from 'next/link';
import Logo from '../../components/logo';
import Countdown from '../../components/countdown';
import Back from '../../components/back';
import { motion } from 'framer-motion';
import { debugLaunch, debugLive } from '../../utils/helpers';

const debugVimeoLink = 'https://player.vimeo.com/video/514470296?h=a7bd2f8234';

const vimeoEmbed = (
  <iframe
    src={debugVimeoLink}
    frameBorder='0'
    allow='autoplay; fullscreen; picture-in-picture'
    allowFullScreen
    className='vimeo-latest'
  ></iframe>
);

const Latest = () => {
  return (
    <>
      <div className='wrapper live'>
        <img src='/raf4.jpg' className={styles.backgroundImage} />
        <div className={styles.container}>
          <header className={styles.header}>
            <Logo />
            <Countdown
              launch={debugLaunch}
              live={debugLive}
              changeToIcon={true}
            />
          </header>
          <main className={styles.main}>
            <div className={[styles.flex, styles.latestFlex].join(' ')}>
              <div className={styles.title}>FROM THE STUDIO</div>
              <div className={[styles.title, styles.video].join(' ')}>
                DESCRIPTION
              </div>

              <div className={styles.latestContent}>
                {/* <img src='/from-studio.jpg' alt='' className={styles.cover}></img> */}
                <div className={styles.episode}>Episode One</div>
                {vimeoEmbed}
              </div>
              <div className={styles.latestChat}>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip
                </p>
              </div>
            </div>
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
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ delay: 0, duration: 0.5, ease: 'easeInOut' }}
      >
        <div></div>
        <img src='/transition.jpg' alt='' />
      </motion.div>
      <motion.div
        className='slide'
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}
      >
        <div></div>
        <img src='/transition.jpg' alt='' />
      </motion.div>
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

export default Latest;
