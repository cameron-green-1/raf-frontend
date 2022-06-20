import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { calculateDelta, convertTime, debugConfig } from '../utils/helpers';
import styles from '../styles/Countdown.module.css';
import IconSatellite from './svg/iconSatellite';

const Countdown = ({ launch, live = false, changeToIcon = false }) => {
  // const [countdown, setCountdown] = useState('');
  const router = useRouter();
  const [countdown, setCountdown] = useState('00:00:00');
  const [allowTimer, setAllowTimer] = useState(true);
  useEffect(() => {
    // setInterval(() => {
    //   const delta = calculateDelta(launch);
    //   const countdown = delta > 0 ? convertTime(delta) : '00:00:00';
    //   setCountdown(countdown);
    // }, 1000);
  }, []);
  useEffect(() => {
    if (launch !== debugConfig.launchTime) {
      if (allowTimer) {
        console.log('setting timer');
        setInterval(() => {
          const delta = calculateDelta(launch);
          const countdown = delta > 0 ? convertTime(delta) : '00:00:00';
          setCountdown(countdown);
        }, 1000);
      }
      setAllowTimer(false);
    }
  }, [launch]);

  return (
    <div style={{ pointerEvents: 'all' }}>
      <Link href='/comms'>
        <div className={styles.countdown}>
          {/* <div className={styles.live}> */}
          {/* {countdown === 'NOW' ? 'LIVE' : 'LIVE IN'} */}
          {live ? (
            changeToIcon ? (
              <div className={styles.commsLink}>
                <IconSatellite colour={'#C60C30'} size={75} />
                <div className={styles.commsText}>
                  <span style={{ color: '#C60C30' }}>WE'RE LIVE</span>
                  CHAT NOW
                </div>
                <div className={styles.commsTextSmall}>LIVE</div>
              </div>
            ) : (
              <div className={styles.live}>
                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>LIVE
                </div>
              </div>
            )
          ) : (
            <div className={styles.live}>LIVE IN</div>
          )}
          {/* </div> */}
          <div
            className={styles.time}
            style={{ display: live ? 'none' : 'flex' }}
          >
            {countdown}
          </div>
        </div>
      </Link>
      {/* <p
        className={styles.extraInfo}
        style={{
          display: router.pathname === '/operations' ? 'block' : 'none',
        }}
      >
        Join us now
      </p>
      <p
        className={styles.extraInfo}
        style={{
          display: router.pathname === '/operations' ? 'block' : 'none',
        }}
      >
        Live From The RAF Panel
      </p>
      <p
        className={styles.extraInfo}
        style={{
          display: router.pathname === '/operations' ? 'block' : 'none',
        }}
      >
        From 18:00 to 18:30
      </p> */}
      <p
        className={styles.extraInfo}
        style={{
          display:
            router.pathname === '/operations' && !live ? 'block' : 'none',
        }}
      >
        Join us now
      </p>
      <p
        className={styles.extraInfo}
        style={{
          display:
            router.pathname === '/operations' && !live ? 'block' : 'none',
        }}
      >
        Live From The RAF Panel
      </p>
      <p
        className={styles.extraInfo}
        style={{
          display:
            router.pathname === '/operations' && !live ? 'block' : 'none',
        }}
      >
        From 18:00 to 18:30.
      </p>
    </div>
  );
};

export default Countdown;
