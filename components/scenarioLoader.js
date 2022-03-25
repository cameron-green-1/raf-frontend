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
      <div className={styles.bgContainer}>
        <img src='/briefing-bg.jpg' className={styles.bg} id='bg' />
        <div className={styles.bgCover} id='bgCover' />
      </div>
      <div className={styles.briefingMain} id='briefing-main'>
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
      <div className={styles.crosshair} id='crosshair'>
        <div className={styles.vertical} id='vertical'></div>
        <div className={styles.horizontal} id='horizontal'></div>
        <div className={styles.target} id='target'></div>
      </div>
    </div>
  );
};

const ScenarioLoader = () => {
  // const [firstLoading, setFirstLoading] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);
  // const [firstLoading, setFirstLoading] = useState(false);
  // const [secondLoading, setSecondLoading] = useState(false);
  // let vid;
  useEffect(() => {
    const bg = document.getElementById('bg');
    const bgCover = document.getElementById('bgCover');
    const crosshair = document.getElementById('crosshair');
    // const vertical = document.getElementById('vertical');
    // const horizontal = document.getElementById('horizontal');
    const target = document.getElementById('target');
    let vid = document.getElementById('briefing-video');

    // setTimeout(() => {
    //   setFirstLoading(false);
    //   if (secondLoading) {
    //     vid.play();
    //     vid.muted = false;
    //     setTimeout(() => {
    //       vid.muted = true;
    //       vid.pause();
    //       setSecondLoading(false);
    //     }, 5000);
    //     setTimeout(() => setSecondLoading(false), (vid.duration + 1) * 1000);
    //   }
    // }, 3000);
    // setTimeout(() => setSecondLoading(false), 7000);

    // setTimeout(() => {
    //   setFirstLoading(false);
    // if (secondLoading) {
    //   vid.play();
    //   vid.muted = false;
    //   setTimeout(() => {
    //     vid.muted = true;
    //     vid.pause();
    //     setSecondLoading(false);
    //   }, 5000);
    //   setTimeout(() => setSecondLoading(false), (vid.duration + 1) * 1000);
    // }
    // }, 3000);
    // setTimeout(() => setSecondLoading(false), 7000);

    setTimeout(() => {
      setFirstLoading(false);
    }, 3000);

    setTimeout(() => {
      crosshair.style.transform = 'translate(-10vw, -10vh)';
      setTimeout(() => {
        target.style.visibility = 'visible';
        setTimeout(() => {
          target.style.visibility = 'hidden';
        }, 750);
      }, 1250);
    }, 3250);
    setTimeout(() => {
      bg.style.transform = 'translate(22.5%, 22.5%) scale(1.5)';
    }, 5000);
    setTimeout(() => {
      crosshair.style.transform = 'translate(7.5vw, 7.5vh)';
      setTimeout(() => {
        target.style.visibility = 'visible';
        setTimeout(() => {
          target.style.visibility = 'hidden';
        }, 750);
      }, 1250);
      // setFirstLoading(false);
    }, 6000);
    setTimeout(() => {
      bg.style.transform = 'translate(17.5%, 17.5%) scale(2)';
    }, 7250);
    setTimeout(() => {
      const briefingMain = document.getElementById('briefing-main');
      crosshair.style.opacity = 0;
      bgCover.style.transform = 'translateX(120%)';
      briefingMain.style.opacity = 1;
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
    }, 8500);
  }, []);
  return (
    <div
      className={styles.loader}
      style={{
        // transform: secondLoading ? 'translateY(0%)' : 'translateY(-100%)',
        transform: secondLoading ? 'translateY(0%)' : 'translateY(-200%)',
        pointerEvents: secondLoading ? 'all' : 'none',
      }}
    >
      <Briefing />
      <Loading firstLoading={firstLoading} />
    </div>
  );
};

export default ScenarioLoader;
