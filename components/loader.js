import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProgressBarManager from './progressBarManager';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // if (window.sessionStorage.getItem('firstLoadDone') === null) {
    //   setLoading(true);
    //   window.sessionStorage.setItem('firstLoadDone', 1);
    // setTimeout(() => setLoading(false), 5000);
    // } else {
    //   setLoading(false);
    // }
    // setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <div
      className={styles.loader}
      style={{
        transform: loading ? 'translateY(0%)' : 'translateY(-100%)',
        pointerEvents: loading ? 'all' : 'none',
      }}
    >
      <div className='wrapper'>
        <img src='/stars.jpg' className={styles.bg} />
        <main className={styles.holding}>
          <img src='/logo.png' alt='' className={styles.loadingLogo} />
          <div className={styles.progress}>
            <div className={styles.progressSection}>
              <h1>SATELLITE DATA LOADING</h1>
              <ProgressBarManager tick={50} />
            </div>
            <div className={styles.progressSection}>
              <h1>OPERATION DATA LOADING</h1>
              <ProgressBarManager tick={75} />
            </div>
            <div className={styles.progressSection}>
              <h1>PROFESSION DATA LOADING</h1>
              <ProgressBarManager tick={100} />
            </div>
          </div>
          <img
            // className={styles.holdingLogos}
            // src='/holding-logos.png'
            src='/holding-logos-4.png'
            alt='RAF Regular & Reserve | No Ordinary Job'
            className={styles.footerLogos}
          />
        </main>
      </div>
    </div>
  );
};

export default Loader;
