import Link from 'next/link';
import styles from '../styles/Back.module.css';

const Back = ({ text }) => {
  return (
    <Link href={text ? '/comms' : '/operations'}>
      <div className={styles.back}>
        <span>◄</span> {text ? text : 'BACK TO OPERATIONS'}
      </div>
    </Link>
  );
};

export default Back;
