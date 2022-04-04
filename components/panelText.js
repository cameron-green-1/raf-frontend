import Panel from './panel';
import styles from '../styles/PanelPdfLink.module.css';

const PanelText = ({ hotspot }) => {
  return (
    <Panel padding={0}>
      <div className={styles.flex}>
        <div className={styles.image}>
          <img src={hotspot.img} className={styles.img} alt='' />
          <h1 className={styles.imgText} lang='de'>
            {hotspot.title.toUpperCase()}
          </h1>
        </div>
        <div className={styles.info}>
          <h2 className={styles.profession}>PROFESSION</h2>
          <h1 className={styles.title}>{hotspot.title}</h1>
          <p className={styles.description}>{hotspot.description}</p>
        </div>
      </div>
    </Panel>
  );
};

export default PanelText;
