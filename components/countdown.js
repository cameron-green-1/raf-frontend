import { useEffect, useState } from 'react';
import { calculateDelta, convertTime } from '../utils/helpers';
import styles from '../styles/Countdown.module.css';

const Countdown = ({ launch }) => {
  const [countdown, setCountdown] = useState('');
  useEffect(() => {
    setInterval(() => {
      const delta = calculateDelta(launch);
      const countdown = delta > 0 ? convertTime(delta) : 'NOW';
      setCountdown(countdown);
    }, 1000);
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.live}>
        {countdown === 'NOW' ? 'LIVE' : 'GOING LIVE IN'}
      </div>
      <div
        className={styles.time}
        style={{ display: countdown === 'NOW' ? 'none' : 'block' }}
      >
        {countdown}
      </div>
    </div>
  );
};

export default Countdown;
