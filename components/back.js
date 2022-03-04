import Link from 'next/link';
import styles from '../styles/Back.module.css';

const Back = () => {
  return (
    <Link href='/operations'>
      <div className={styles.back}>
        <span>◄</span> BACK TO OPERATIONS
      </div>
    </Link>
  );
};

export default Back;
