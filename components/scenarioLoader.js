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

function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );
  const isSafari =
    ua.indexOf('safari') != -1 &&
    !(ua.indexOf('chrome') != -1) &&
    ua.indexOf('version/') != -1;
  return isSafari && hasMediaCapabilities;
}

const Briefing = ({ setSecondLoading, scenario }) => {
  useEffect(() => {
    let vid = document.getElementById('briefing-video');
    vid.muted = true;
    vid.pause();
    console.log(scenario);
  }, []);
  return (
    <div className={styles.briefing}>
      <div className={styles.bgContainer}>
        {/* <img src='/briefing-bg.jpg' className={styles.bg} id='bg' /> */}
        <img src={scenario.satelliteImage} className={styles.bg} id='bg' />
        <div className={styles.bgCover} id='bgCover' />
      </div>
      <div className={styles.briefingMain} id='briefing-main'>
        <ul className={styles.details}>
          <li className={styles.item}>
            <h1>OPERATION</h1>
            {/* <p>Blue Dragon</p> */}
            <p>{scenario.operation}</p>
          </li>
          <li className={styles.item}>
            <h1>LOCATION</h1>
            {/* <p>Undisclosed</p> */}
            <p>{scenario.location}</p>
          </li>
          <li className={styles.item}>
            <h1>DETAILS</h1>
            {/* <p>83 Expeditionary Force Forward Operating Base. 4 Typhoons</p> */}
            <p>{scenario.details}</p>
          </li>
          <li className={styles.item}>
            <h1>PROFESSIONS</h1>
            {/* <p>Flight Control, Engineer, Cyber Security</p> */}
            <p>{scenario.professions}</p>
          </li>
        </ul>
        <div className={styles.video}>
          <div className={styles.item}>
            <h1>VIDEO BRIEFING</h1>
            {/* <video id='briefing-video' controls playsInline> */}
            <video
              id='briefing-video'
              controls
              playsInline
              disablePictureInPicture
              controlslist='nodownload noplaybackrate'
            >
              {/* <source src='/briefing1.webm' type='video/webm' muted={true} /> */}
              {/* <source
                src={scenario.safariVideo}
                type='video/mp4; codecs="hvc1"'
              /> */}
              {/* <source
                // src='/briefing-demo.webm'
                src={scenario.video}
                type='video/webm'
                // muted={false}
                // muted={true}
                // muted='muted'
              /> */}
              <p>
                Your browser doesn't support HTML5 video. Here is a
                <a href={scenario.video}>link to the video</a> instead.
              </p>
            </video>
            <button id='btn-continue' onClick={() => setSecondLoading(false)}>
              <span className={styles.continue}>CONTINUE</span>
            </button>
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

const ScenarioLoader = ({ scenario, duration }) => {
  // const [firstLoading, setFirstLoading] = useState(false);
  // const [secondLoading, setSecondLoading] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);
  const [secondLoading, setSecondLoading] = useState(true);

  useEffect(() => {
    const bg = document.getElementById('bg');
    const bgCover = document.getElementById('bgCover');
    const crosshair = document.getElementById('crosshair');
    const target = document.getElementById('target');
    const vid = document.getElementById('briefing-video');
    const btnContinue = document.getElementById('btn-continue');
    const fakeClick = document.getElementById('fakeClick');

    vid.src = supportsHEVCAlpha() ? scenario.safariVideo : scenario.video;

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
    }, 6000);
    setTimeout(() => {
      bg.style.transform = 'translate(17.5%, 17.5%) scale(2)';
      // fakeClick.click();
    }, 7250);
    setTimeout(() => {
      btnContinue.style.pointerEvents = 'all';
      const briefingMain = document.getElementById('briefing-main');
      crosshair.style.opacity = 0;
      bgCover.style.transform = 'translateX(120%)';
      briefingMain.style.opacity = 1;
      // console.log('safari');
      // console.log(vid);
      // vid.muted = true;
      // vid.play();
      vid.muted = false;
      // vid.play();
      if (secondLoading) {
        // vid.play();
        // vid.muted = false;
        setTimeout(() => {
          // vid.muted = true;
          // vid.pause();
        }, duration);
        // }, 5000);
        // }, vid.duration + 1);
        // setTimeout(() => setSecondLoading(false), (vid.duration + 1) * 1000);
      }
    }, 8500);
  }, []);
  useEffect(() => {
    console.log('setSecondLoading state changed');
    const vid = document.getElementById('briefing-video');
    vid.muted = true;
    vid.pause();
  }, [secondLoading]);
  return (
    <div
      className={styles.loader}
      style={{
        // transform: secondLoading ? 'translateY(0%)' : 'translateY(-100%)',
        transform: secondLoading ? 'translateY(0%)' : 'translateY(-200%)',
        pointerEvents: secondLoading ? 'all' : 'none',
      }}
    >
      <Briefing
        setSecondLoading={setSecondLoading}
        scenario={scenario}
        duration={duration}
      />
      <Loading firstLoading={firstLoading} />
      <div
        id='fakeClick'
        style={{ position: 'fixed', top: 20, left: 20, width: 20, height: 20 }}
      ></div>
    </div>
  );
};

export default ScenarioLoader;
