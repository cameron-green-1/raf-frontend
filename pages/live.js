// import {useEffect} from 'react';
import Logo from '../components/logo';
import styles from '../styles/Live.module.css';
import withTransition from '../components/withTransition';

export async function getStaticProps() {
  let teamsLinks = [];
  try {
    const res = await fetch('http://localhost:1337/api/teams-links/1');
    const json = await res.json();
    const link = json.data.attributes.link;
    teamsLinks.push(link);
  } catch (err) {
    console.log(err);
  }
  return {
    props: { teamsLinks },
  };
}

const Live = ({ teamsLinks }) => {
  const images = [
    <img src='/grid1.jpg' alt='' className={styles.thumbnail} />,
    <img src='/grid2.jpg' alt='' className={styles.thumbnail} />,
    <img src='/grid3.jpg' alt='' className={styles.thumbnail} />,
    <img src='/grid4.jpg' alt='' className={styles.thumbnail} />,
    <img src='/grid5.jpg' alt='' className={styles.thumbnail} />,
    <img src='/grid6.jpg' alt='' className={styles.thumbnail} />,
    <img src='/grid7.jpg' alt='' className={styles.thumbnail} />,
    <img src='/grid8.jpg' alt='' className={styles.thumbnail} />,
  ];
  return (
    <div className='wrapper'>
      <img src='/raf3.jpg' className={styles.backgroundImage} />
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo />
          <div className={styles.live}>
            <span className={styles.bullet}>•</span> LIVE
          </div>
        </header>
        <div className={styles.name}>The Comms Room</div>
        <div className={styles.flex}>
          <div className={styles.title}>LATEST CONTENT</div>
          <div className={styles.title}>LIVE VIDEO CHAT ROOM</div>
          <div className={styles.content}>
            <a
              href='https://www.raf.mod.uk/recruitment/engineering'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/raf2.jpg' alt='' className={styles.cover}></img>
            </a>
          </div>
          <div className={styles.chat}>
            <p>
              We’re now <span>LIVE!</span> Join a teams video chat room below to
              speak with RAF personnel and find out more about a specific role.
            </p>
            <ul className={styles.rooms}>
              <li className={styles.room}>
                <img src='/share.png' alt='' />
                <p>FORCE PROTECTION</p>
                <div>LIVE</div>
              </li>
              <li className={styles.room}>
                <img src='/share.png' alt='' />
                <p>AIR OPERATIONS</p>
                <div>LIVE</div>
              </li>
              <li className={styles.room}>
                <img src='/share.png' alt='' />
                <p>INTELLIGENCE</p>
                <div>LIVE</div>
              </li>
              <li className={styles.room}>
                <img src='/share.png' alt='' />
                <p>LOGISTICS</p>
                <div>LIVE</div>
              </li>
              <li className={styles.room}>
                <img src='/share.png' alt='' />
                <p>ENGINEERING</p>
                <div>LIVE</div>
              </li>
              <li className={styles.room}>
                <img src='/share.png' alt='' />
                <p>PERSONNEL TRAINING</p>
                <div>LIVE</div>
              </li>
              <li className={styles.room}>
                <img src='/share.png' alt='' />
                <p>FORCE PROTECTION</p>
                <div>LIVE</div>
              </li>
            </ul>
          </div>
          <div></div>
          <div className={styles.question}>
            <div className={styles.title}>ASK A QUESTION</div>
            <p>
              If you’d prefer to ask a question via text chat, please click
              below:
            </p>
            <button>
              <img src='/bubble.png' alt='' />
              <p>LIVE TEXT CHAT</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTransition(Live);
// export default Live;
