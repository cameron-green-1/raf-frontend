import { useEffect } from 'react';
import Link from 'next/link';
import '@google/model-viewer/dist/model-viewer';
import styles from '../styles/Earth.module.css';

const Model = () => {
  useEffect(() => {
    const modelViewer = document.getElementById('viewer');
    // console.log(modelViewer);
    modelViewer.addEventListener('model-visibility', function (evt) {
      // this is when the globe is loaded and visible
      console.log('globe and therefore index page loaded');
    });

    // ADD FALLBACK HERE AS SETTIMEOUT IN CASE MODEL-VISIBILITY EVENT ISN'T CALLED

    const moveToHotspot = () => {
      const modelViewer = document.querySelector('#viewer');
      const panels = document.querySelectorAll('.panel');
      const buttonCloseArr = document.querySelectorAll('.btn-close');

      function closePanel(e) {
        panels.forEach((panel) => {
          panel.style.display = 'none';
          panel.style.opacity = 0;
        });
      }

      buttonCloseArr.forEach((btn) => {
        btn.addEventListener('click', closePanel);
      });

      const openPanel = (country) => {
        panels.forEach((panel) => {
          panel.style.display = 'none';
          panel.style.opacity = 0;

          if (panel.classList[1] === `panel--${country}`) {
            panel.style.display = 'block';
            panel.style.opacity = 1;
          }
        });
      };

      const annotationClicked = (annotation) => {
        // const cameraOrbit = modelViewer.getCameraOrbit();
        const country = annotation.id;
        const radius = '1.0975154094665978m';
        const orbits = {
          england: `1.5917402778188294rad 0.8482300164692436rad ${radius}`,
          australia: `3.895574890451342rad 2.1258110289290912rad ${radius}`,
          us: `-0.15707963267948974rad 1.0053096491487334rad ${radius}`,
        };
        modelViewer.cameraOrbit = orbits[country];
        openPanel(country);
      };

      modelViewer.querySelectorAll('button').forEach((hotspot) => {
        // console.log('hello hotspot', hotspot);
        hotspot.addEventListener('click', () => annotationClicked(hotspot));
      });
    };

    setTimeout(moveToHotspot, 200);
  }, []);
  return (
    <div className='model'>
      {
        // need to handle case on screen size as glow goes the wrong size
        // need to add a window resize handler and debounce it
      }
      <div
        className='glow'
        style={{
          width: 635,
          height: 635,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'rgb(23, 104, 145)',
          filter: 'blur(35px)',
        }}
      ></div>
      <model-viewer
        style={{
          width: '75vw',
          height: '80vh',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          // backgroundColor: '#082540',
        }}
        id='viewer'
        bounds='tight'
        loading='eager'
        // poster='/poster.jpg'
        disable-zoom
        camera-controls
        src='/earth.glb'
        environment-image='/aircraft_workshop_01_1k.hdr'
        shadow-intensity='0'
        exposure='1.25'
      >
        <button
          className='Hotspot'
          id='england'
          slot='hotspot-1'
          data-position='0.24392951640643562m 0.31683109019494216m 0.006397227787057415m'
          data-normal='0.6592595175080062m 0.7517413028792996m 0.01618339026421587m'
          data-visibility-attribute='visible'
        >
          <div className='HotspotAnnotation'></div>
        </button>
        <button
          className='Hotspot'
          id='australia'
          slot='hotspot-2'
          data-position='-0.25085977173563767m -0.1693309138518099m -0.2601983595344651m'
          data-normal='-0.6184666632339064m -0.44218022314338956m -0.6495965184090661m'
          data-visibility-attribute='visible'
        >
          <div className='HotspotAnnotation'></div>
        </button>
        <button
          className='Hotspot'
          id='us'
          slot='hotspot-3'
          data-position='-0.04240486239587407m 0.2369244427988132m 0.3188482737537706m'
          data-normal='-0.10179003090738913m 0.5554597835445058m 0.8252897784854503m'
          data-visibility-attribute='visible'
        >
          <div className='HotspotAnnotation'></div>
        </button>
        <div className='progress-bar hide' slot='progress-bar'>
          <div className='update-bar'></div>
        </div>
      </model-viewer>
      <div className='panel panel--england'>
        <div className='info'>
          <div className='section section-close'>
            <button className='btn-close'>
              close [<span>X</span>]
            </button>
          </div>
          <div className='section'>
            <div className='title'>[OPERATION]</div>
            <div className='name operation'>Blue Dragon</div>
          </div>
          <div className='section'>
            <div className='title'>[LOCATION]</div>
            <div className='name'>England</div>
          </div>
          <div className='section'>
            <div className='title'>[ROLES]</div>
            <div className='description'>
              Flight Control, Engineer, Cyber Security
            </div>
          </div>
          <div className='section section-launch'>
            <button className='btn btn-operation'>LAUNCH OPERATION</button>
          </div>
        </div>
      </div>
      <div className='panel panel--australia'>
        <div className='info'>
          <div className='section section-close'>
            <button className='btn-close'>
              Close [<span>X</span>]
            </button>
          </div>
          <div className='section'>
            <div className='title operation'>[OPERATION]</div>
            <div className='name operation'>Lightning Dawn</div>
          </div>
          <div className='section'>
            <div className='title'>[LOCATION]</div>
            <div className='name'>Australia</div>
          </div>
          <div className='section'>
            <div className='title'>[ROLES]</div>
            <div className='description'>
              Flight Control, Engineer, Cyber Security
            </div>
          </div>
          <div className='section-launch'>
            <button className='btn btn-operation'>LAUNCH OPERATION</button>
          </div>
        </div>
      </div>
      <div className='panel panel--us'>
        <div className='info'>
          <div className='section section-close'>
            <button className='btn-close'>
              Close [<span>X</span>]
            </button>
          </div>
          <div className='section'>
            <div className='title'>[OPERATION]</div>
            <div className='name operation'>Magic Carpet</div>
          </div>
          <div className='section'>
            <div className='title'>[LOCATION]</div>
            <div className='name'>United States</div>
          </div>
          <div className='section'>
            <div className='title'>[ROLES]</div>
            <div className='description'>
              Flight Control, Engineer, Cyber Security
            </div>
          </div>
          <div className='section section-launch'>
            <Link href='/live'>
              <button className='btn btn-operation'>LAUNCH OPERATION</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
