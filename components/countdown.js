import { useEffect, useState } from 'react';
import Link from 'next/link';
import { calculateDelta, convertTime } from '../utils/helpers';
import styles from '../styles/Countdown.module.css';

const Countdown = ({ launch, live = false }) => {
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
        <div className={styles.live}>
          {/* {countdown === 'NOW' ? 'LIVE' : 'LIVE IN'} */}
          {live ? (
            <div className={styles.dotContainer}>
              <div className={styles.dot}></div>LIVE
            </div>
          ) : (
            'LIVE IN'
          )}
        </div>
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
