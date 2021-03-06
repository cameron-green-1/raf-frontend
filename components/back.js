import Link from 'next/link';
import styles from '../styles/Back.module.css';

const Back = ({ text, setWidth, noPadding = false, commsExtra = false }) => {
  return (
    <div style={{ pointerEvents: 'all' }}>
      <Link href={text ? '/comms' : '/operations'}>
        <div
          className={styles.back}
          style={{
            width: setWidth ? setWidth : 'auto',
            maxWidth: 450,
            padding: noPadding ? 0 : '20px 0',
          }}
        >
          <span>◄</span>{' '}
          {text
            ? text
            : commsExtra
            ? // ? 'Back to Operations to discover a variety of RAF professions around the world'
              'BACK TO OPERATIONS TO DISCOVER A VARIETY OF RAF PROFESSIONS AROUND THE WORLD'
            : // 'Back to Operations to discover a variety of RAF professions'
              'BACK TO OPERATIONS'}
        </div>
      </Link>
    </div>
  );
};

export default Back;
