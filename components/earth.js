import { useEffect } from 'react';
import Link from 'next/link';
import '@google/model-viewer/dist/model-viewer';
import styles from '../styles/Earth.module.css';
import IconSatellite from './svg/iconSatellite';
import Close from './svg/close';

const Model = ({ live }) => {
  useEffect(() => {
    const modelViewer = document.getElementById('viewer');
    // console.log(modelViewer);
    modelViewer.addEventListener('model-visibility', function (evt) {
      // this is when the globe is loaded and visible
      // console.log('globe and therefore index page loaded');
    });

    // ADD FALLBACK HERE AS SETTIMEOUT IN CASE MODEL-VISIBILITY EVENT ISN'T CALLED

    const moveToHotspot = () => {
      const modelViewer = document.querySelector('#viewer');
      const panels = document.querySelectorAll('.panel');
      // const buttonCloseArr = document.querySelectorAll('.btn-close');
      const buttonCloseArr = document.querySelectorAll('.close');

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
        const cameraOrbit = modelViewer.getCameraOrbit();
        // console.log(cameraOrbit);
        // const radsToDegs = (rad) => (rad * 180) / Math.PI;
        // console.log(radsToDegs(cameraOrbit.theta), radsToDegs(cameraOrbit.phi));
        // console.log(annotation.id);
        const country = annotation.id;
        const radius = '1.0975154094665978m';
        const orbits = {
          england: `1.5917402778188294rad 0.8482300164692436rad ${radius}`,
          // australia: `3.895574890451342rad 2.1258110289290912rad ${radius}`,
          australia: `1.8682218848056886rad 1.0155939067898059rad ${radius}`,
          // us: `-0.15707963267948974rad 1.0053096491487334rad ${radius}`,
          us: `0.11949583324281898rad 1.3711583711000672rad ${radius}`,
        };
        if (country !== 'comms') {
          modelViewer.cameraOrbit = orbits[country];
          openPanel(country);
        }
      };

      modelViewer.querySelectorAll('button').forEach((hotspot) => {
        // console.log('hello hotspot', hotspot);
        hotspot.addEventListener('click', () => annotationClicked(hotspot));
      });
    };

    setTimeout(moveToHotspot, 200);

    // handle glow size
  }, []);
  return (
    <div className='model'>
      {
        // need to handle case on screen size as glow goes the wrong size
        // need to add a window resize handler and debounce it
      }
      <div className='glow'></div>
      <model-viewer
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          // overflow: 'visible !important',
        }}
        className='globe'
        id='viewer'
        bounds='tight'
        loading='eager'
        // poster='/poster.jpg'
        disable-zoom
        data-js-focus-visible
        camera-controls
        src='/earth.glb'
        environment-image='/aircraft_workshop_01_1k.hdr'
        // camera-orbit='1.5917402778188294rad 0.8482300164692436rad 1.0975154094665978m'
        camera-orbit='1.8682218848056886rad 1.0155939067898059rad 1.0975154094665978m'
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
          <img className='hotspot-svg' src='/hotspot.svg' alt='' />
        </button>
        <button
          className='Hotspot'
          id='australia'
          slot='hotspot-2'
          data-position='0.2486346049614271m 0.2910040758779223m -0.11388295176282018m'
          data-normal='0.6028827492498801m 0.7517413237919427m -0.26724029030152646m'
          data-visibility-attribute='visible'
        >
          <img className='hotspot-svg' src='/hotspot.svg' alt='' />
        </button>
        <button
          className='Hotspot'
          id='us'
          slot='hotspot-3'
          data-position='0.07362272650680375m 0.1493442242897669m 0.36340560801710026m'
          data-normal='0.20748016084064164m 0.32135404888827773m 0.9239499759839014m'
          data-visibility-attribute='visible'
        >
          <img className='hotspot-svg' src='/hotspot.svg' alt='' />
        </button>
        <button
          className='Hotspot'
          slot='hotspot-4'
          id='comms'
          data-position='0.19287068730318838m 0.3490226873894651m -0.026332454430294135m'
          data-normal='0.43906905408502506m 0.8968197769742062m -0.05415397836555196m'
          data-visibility-attribute='visible'
        >
          <Link href='/comms'>
            <div>
              <IconSatellite colour={live ? '#C60C30' : '#038FD6'} />
            </div>
          </Link>
        </button>
        <div className='progress-bar hide' slot='progress-bar'>
          <div className='update-bar'></div>
        </div>
      </model-viewer>
      <div className='panel panel--england'>
        <div className='scan-lines'></div>
        <div className='info'>
          {/* <div className='section section-close'>
            <button className='btn-close'>
              close [<span>X</span>]
            </button>
          </div> */}
          {/* <img src='/close.svg' alt='' className='close' /> */}
          <Close />
          <div className='section'>
            <div className='title'>OPERATION</div>
            <div className='name operation'>MACA SUPPORT</div>
          </div>
          <div className='section'>
            <div className='title'>LOCATION</div>
            <div className='name'>UK</div>
          </div>
          <div className='section'>
            <div className='title'>ROLES</div>
            <div className='description'>
              Medical Services, Logistics, Security & Resilience Operations,
              People Operations, Chaplaincy, Legal, Air Crew, Engineering
            </div>
          </div>
          <div className='section section-launch'>
            <Link href='/scenario'>
              <button className='btn btn-operation'>
                <span className='operation-text'>LAUNCH OPERATION</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='panel panel--australia'>
        <div className='scan-lines'></div>
        <div className='info'>
          {/* <div className='section section-close'>
            <button className='btn-close'>
              Close [<span>X</span>]
            </button>
          </div> */}
          {/* <img src='/close.svg' alt='' className='close' /> */}
          <Close />
          <div className='section'>
            <div className='title operation'>OPERATION</div>
            <div className='name operation'>OPERATION BILOXI</div>
          </div>
          <div className='section'>
            <div className='title'>LOCATION</div>
            <div className='name'>ROMANIA</div>
          </div>
          <div className='section'>
            <div className='title'>ROLES</div>
            <div className='description'>
              Engineering, Intelligence, Air and Space Operations, Logistics,
              Security & Resilience Operations
            </div>
          </div>
          <div className='section-launch'>
            <Link href='/scenario'>
              <button className='btn btn-operation'>
                <span className='operation-text'>LAUNCH OPERATION</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='panel panel--us'>
        <div className='scan-lines'></div>
        <div className='info'>
          {/* <div className='section section-close'>
            <button className='btn-close'>
              Close [<span>X</span>]
            </button>
          </div> */}
          {/* <img src='/close.svg' alt='' className='close' /> */}
          <Close />
          <div className='scan' />
          <div className='section'>
            <div className='title'>OPERATION</div>
            <div className='name operation'>OPERATION RUMAN</div>
          </div>
          <div className='section'>
            <div className='title'>LOCATION</div>
            <div className='name'>CARIBBEAN</div>
          </div>
          <div className='section'>
            <div className='title'>ROLES</div>
            <div className='description'>
              Medical Services, Air & Space Operations, Engineering,
              Intelligence, Logistics
            </div>
          </div>
          <div className='section section-launch'>
            <Link href='/scenario'>
              <button className='btn btn-operation'>
                <span className='operation-text'>LAUNCH OPERATION</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
