import { useState, useEffect } from 'react';
import Panel from './panel';
import styles from '../styles/PanelPdfLink.module.css';

const handleVideo = (
  link,
  setShowVideo,
  setVideoLink,
  setVideoTitle,
  setVideoDescription
) => {
  setVideoLink(link.link);
  setVideoTitle(link.title);
  setVideoDescription(link.description);
  setShowVideo(true);
  // console.log(videoDescription);
};

const PanelFind = ({ hotspot }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLink, setVideoLink] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  useEffect(() => {
    console.log(videoTitle);
  }, [showVideo]);
  return showVideo ? (
    <Panel padding={30} back={true}>
      <div className={styles.gridVideo}>
        {videoLink}
        <div>
          {/* <h2 className={styles.profession}>PROFESSION</h2> */}
          <h1 className={styles.titleVideo}>{videoTitle}</h1>
        </div>
        <p className={styles.descriptionVideo}>{videoDescription}</p>
        <button className={styles.goBack} onClick={() => setShowVideo(false)}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
              fill='#0097D1'
            />
            <path
              d='M6.99947 11.5459L11.5449 7.00044'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
            />
            <path
              d='M8.60766 11.6077H17.3923'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
            />
            <path
              d='M7 11.5455L11.5455 17'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg>
        </button>
      </div>
    </Panel>
  ) : (
    <Panel padding={0}>
      <div className={styles.flex}>
        <div className={styles.image}>
          <img src={hotspot.img} className={styles.img} alt='' />
          <h1 className={styles.imgText} lang='de'>
            LIFE IN THE RAF
          </h1>
        </div>
        <div className={styles.info}>
          <h2 className={styles.profession}>LIFE IN THE RAF</h2>
          {/* <h1 className={styles.title}>Other Opportunities</h1> */}
          <p className={styles.description}>
            Learn more about life in the RAF.
          </p>
          <ul className={styles.listFind}>
            {hotspot.links.map((link, i) => {
              return (
                <li className={styles.item} key={i}>
                  <h1>{link.title}</h1>
                  <button
                    className={styles.button}
                    onClick={() =>
                      handleVideo(
                        link,
                        setShowVideo,
                        setVideoLink,
                        setVideoTitle,
                        setVideoDescription
                      )
                    }
                  >
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
