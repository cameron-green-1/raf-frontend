import { useEffect, useState } from 'react';
import Link from 'next/link';
import { calculateDelta, convertTime } from '../utils/helpers';
import styles from '../styles/Countdown.module.css';
import IconSatellite from './svg/iconSatellite';

const Countdown = ({ launch, live = false, changeToIcon = false }) => {
  const [countdown, setCountdown] = useState('');
  useEffect(() => {
    setInterval(() => {
      const delta = calculateDelta(launch);
      const countdown = delta > 0 ? convertTime(delta) : '00:00:00';
      setCountdown(countdown);
    }, 1000);
  }, []);

  return (
    <Link href='/live'>
      <div className={styles.countdown}>
        {/* <div className={styles.live}> */}
        {/* {countdown === 'NOW' ? 'LIVE' : 'LIVE IN'} */}
        {live ? (
          changeToIcon ? (
            <div className={styles.commsLink}>
              <IconSatellite colour={'#C60C30'} size={75} />
              <div className={styles.commsText}>
                <span style={{ color: '#C60C30' }}>WE'RE LIVE</span>
                COMMS ROOM
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
  );
};

export default Countdown;
