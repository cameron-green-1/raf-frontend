import Panel from './panel';
import styles from '../styles/PanelVideo.module.css';

const PanelVideo = ({ hotspot }) => {
  return (
    <Panel>
      <div className={styles.grid}>
        {hotspot.link}
        <h2 className={styles.profession}>PROFESSION</h2>
        <h1 className={styles.title}>{hotspot.title}</h1>
        <p className={styles.description}>{hotspot.description}</p>
      </div>
    </Panel>
  );
};

export default PanelVideo;
