import Logo from '../components/logo';
import styles from '../styles/Live.module.css';

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
      <img src='/bg1.jpg' className={styles.backgroundImage} />
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo />
          <div className={styles.live}>LIVE</div>
        </header>
        <div className={styles.item}>
          <div className={styles.title}>[LOCATION]</div>
          <div className={styles.name}>The Comms Tower</div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>[LATEST INFO]</div>
          <a
            href='https://www.raf.mod.uk/recruitment/engineering'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/raf2.jpg' alt='' className={styles.cover}></img>
          </a>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>[INTERACTION]</div>
          <div className={styles.name}>LIVE! Chat Rooms</div>
          <p className={styles.description} style={{ marginTop: 20 }}>
            Join a chat room to talk to team members
          </p>
          <p className={styles.description}>
            and find out more about a specific role
          </p>
          <div className={styles.grid}>
            {images.map((img) => {
              return (
                <a
                  href={teamsLinks[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {img}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
