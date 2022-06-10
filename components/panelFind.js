import Panel from './panel';
import styles from '../styles/PanelPdfLink.module.css';

const PanelFind = ({ hotspot }) => {
  return (
    <Panel padding={0}>
      <div className={styles.flex}>
        <div className={styles.image}>
          <img src={hotspot.img} className={styles.img} alt='' />
          <h1 className={styles.imgText} lang='de'>
            FIND YOUR ROLE
          </h1>
        </div>
        <div className={styles.info}>
          <h2 className={styles.profession}>FIND YOUR ROLE</h2>
          <h1 className={styles.title}>Other Opportunities</h1>
          <p className={styles.description}>
            There are many other opportunities in the RAF. Please explore
            further roles below, or use the{' '}
            <a
              href='https://www.raf.mod.uk/recruitment/find-your-role'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              FIND YOUR ROLE
            </a>{' '}
            finder on the RAF website.
          </p>
          <ul className={styles.list}>
            {hotspot.links.map((link, i) => {
              return (
                <li className={styles.item} key={i}>
                  <h1>{link.title}</h1>
                  <a href={link.link} target='_blank' rel='noopener noreferrer'>
                    <button className={styles.button}>
                      <img
                        src={
                          link.type === 'pdf' ? '/download.svg' : '/export.svg'
                        }
                        alt=''
                      />
                      <span>
                        {link.type === 'pdf'
                          ? 'DOWNLOAD ROLE SPEC PDF'
                          : 'LEARN MORE'}
                      </span>
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Panel>
  );
};

export default PanelFind;
