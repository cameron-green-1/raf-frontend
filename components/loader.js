import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Loader.module.css';

const ProgressBar = ({ currentStep, countSteps }) => {
  let dots = [];
  for (let i = 0; i < countSteps; i++) {
    dots.push(
      <div
        className={styles.dot}
        key={i}
        style={{ backgroundColor: i < currentStep ? '#fff' : '#0097d1' }}
      />
    );
  }
  return <div className={styles.dots}>{dots}</div>;
};

const Loader = () => {
  // REFACT THIS MESS
  const maxSteps = 50;
  const [stepSatellite, setStepSatellite] = useState(0);
  const [stepOperation, setStepOperation] = useState(0);
  const [stepProfession, setStepProfession] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timesRunSatellite = 0;
    const intervalSatellite = setInterval(() => {
      timesRunSatellite++;
      if (timesRunSatellite > maxSteps) {
        clearInterval(intervalSatellite);
      }
      setStepSatellite((stepSatellite) => stepSatellite + 1);
    }, 50);
    let timesRunOperation = 0;
    const intervalOperation = setInterval(() => {
      timesRunOperation++;
      if (timesRunOperation > maxSteps) {
        clearInterval(intervalOperation);
      }
      setStepOperation((stepOperation) => stepOperation + 1);
    }, 75);
    let timesRunProfession = 0;
    const intervalProfession = setInterval(() => {
      timesRunProfession++;
      if (timesRunProfession > maxSteps) {
        clearInterval(intervalProfession);
      }
      setStepProfession((stepProfession) => stepProfession + 1);
    }, 100);
    if (window.sessionStorage.getItem('firstLoadDone') === null) {
      setLoading(true);
      window.sessionStorage.setItem('firstLoadDone', 1);
      setTimeout(() => setLoading(false), 5000);
    } else {
      setLoading(false);
    }
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
        <Head>
          <title>RAF Access All Areas</title>
          <meta name='description' content='RAF Access All Areas experience' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <img src='/stars.jpg' className={styles.bg} />
        <main className={styles.holding}>
          <img src='/logo.png' alt='' className={styles.loadingLogo} />
          <div className={styles.progress}>
            <div className={styles.progressSection}>
              <h1>SATELLITE DATA LOADING</h1>
              <ProgressBar currentStep={stepSatellite} countSteps={maxSteps} />
            </div>
            <div className={styles.progressSection}>
              <h1>OPERATION DATA LOADING</h1>
              <ProgressBar currentStep={stepOperation} countSteps={maxSteps} />
            </div>
            <div className={styles.progressSection}>
              <h1>PROFESSION DATA LOADING</h1>
              <ProgressBar currentStep={stepProfession} countSteps={maxSteps} />
            </div>
            {/* <div className={styles.progressSection}>
              <h1>OPERATION DATA LOADING</h1>
              <div className={styles.dots} id='operation'>
                {dots}
              </div>
            </div>
            <div className={styles.progressSection}>
              <h1>PROFESSION DATA LOADING</h1>
              <div className={styles.dots} id='profession'>
                {dots}
              </div>
            </div> */}
          </div>
          <img
            src='/holding-logos.png'
            alt='RAF Regular & Reserve | No Ordinary Job'
            className={styles.footerLogos}
          />
        </main>
      </div>
    </div>
  );
};

export default Loader;
