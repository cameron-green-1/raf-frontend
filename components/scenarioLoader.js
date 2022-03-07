import { useEffect, useState } from 'react';
import ProgressBarManager from './progressBarManager';
import styles from '../styles/ScenarioLoader.module.css';

const Loading = ({ firstLoading }) => {
  return (
    <div
      className={styles.loading}
      style={{
        // opacity: firstLoading ? 1 : 0,
        transform: firstLoading ? 'translateY(0%)' : 'translateY(-100%)',
      }}
    >
      <div className='wrapper'>
        <img src='/briefing-bg.jpg' className={styles.bg} />
        <main className={styles.main}>
          <img src='/logo.png' alt='' className={styles.loadingLogo} />
          <div className={styles.progress}>
            <div className={styles.progressSection}>
              <h1>SATELLITE DATA LOADING</h1>
              <ProgressBarManager tick={50} />
            </div>
            <div className={styles.progressSection}>
              <h1>BRIEFING DATA LOADING</h1>
              <ProgressBarManager tick={75} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const Briefing = () => {
  useEffect(() => {
    let vid = document.getElementById('briefing-video');
    vid.muted = true;
    vid.pause();
  }, []);
  return (
    <div className={styles.briefing}>
      <img src='/briefing-bg.jpg' className={styles.bg} />
      <div className={styles.briefingMain}>
        <ul className={styles.details}>
          <li className={styles.item}>
            <h1>OPERATION</h1>
            <p>Blue Dragon</p>
          </li>
          <li className={styles.item}>
            <h1>LOCATION</h1>
            <p>Undisclosed</p>
          </li>
          <li className={styles.item}>
            <h1>DETAILS</h1>
            <p>83 Expeditionary Force Forward Operating Base. 4 Typhoons</p>
          </li>
          <li className={styles.item}>
            <h1>DETAILS</h1>
            <p>Flight Control, Engineer, Cyber Security</p>
          </li>
        </ul>
        <div className={styles.video}>
          <div className={styles.item}>
            <h1>VIDEO BRIEFING</h1>
            <video id='briefing-video'>
              {/* <source src='/briefing1.webm' type='video/webm' muted={true} /> */}
              <source
                src='/briefing-demo.webm'
                type='video/webm'
                muted={true}
              />
              <p>
                Your browser doesn't support HTML5 video. Here is a
                <a href='/briefing1.webm'>link to the video</a> instead.
              </p>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScenarioLoader = () => {
  const [firstLoading, setFirstLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  // let vid;
  useEffect(() => {
    setTimeout(() => {
      setFirstLoading(false);
      let vid = document.getElementById('briefing-video');
      // vid.muted = true;
      // vid.pause();
      if (secondLoading) {
        vid.play();
        vid.muted = false;
        setTimeout(() => {
          vid.muted = true;
          vid.pause();
          setSecondLoading(false);
        }, 5000);
        setTimeout(() => setSecondLoading(false), (vid.duration + 1) * 1000);
      }
    }, 3000);
    // setTimeout(() => setSecondLoading(false), 7000);
  });
  return (
    <div
      className={styles.loader}
      style={{
        transform: secondLoading ? 'translateY(0%)' : 'translateY(-100%)',
        pointerEvents: secondLoading ? 'all' : 'none',
      }}
    >
      <Briefing />
      <Loading firstLoading={firstLoading} />
    </div>
  );
};

export default ScenarioLoader;
