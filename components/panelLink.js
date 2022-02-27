import Panel from './panel';
import styles from '../styles/PanelPdfLink.module.css';

const PanelLink = ({ hotspot }) => {
  return (
    <Panel padding={0}>
      <div className={styles.flex}>
        <img src={hotspot.img} className={styles.img} alt='' />
        <div className={styles.info}>
          <h2 className={styles.profession}>PROFESSION</h2>
          <h1 className={styles.title}>{hotspot.title}</h1>
          <p className={styles.description}>{hotspot.description}</p>
          <button className={styles.button}>
            <img src='/export.svg' alt='' />
            <span>LEARN MORE</span>
          </button>
        </div>
      </div>
    </Panel>
  );
};

export default PanelLink;
