import { useEffect } from 'react';
import Logo from './logo';
import Countdown from './countdown';
import PanelVideo from './panelVideo';
import PanelPdf from './panelPdf';
import PanelLink from './panelLink';
// import withTransition from './withTransition';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import styles from '../styles/PanoViewer.module.css';

const createPano = (imageSrc, hotspots) => {
  // Element variables
  const container = document.getElementById('container');
  const webglEl = document.getElementById('sphere'),
    width = window.innerWidth,
    height = window.innerHeight;

  // Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
  camera.position.x = 0.1;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  webglEl.appendChild(renderer.domElement);

  // Material
  const map = new THREE.TextureLoader().load(imageSrc);
  const side = THREE.DoubleSide;
  const sphereMaterial = new THREE.MeshBasicMaterial({
    map,
    side,
  });
  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.scale.x = -1;
  scene.add(sphere);

  // Controls
  const controls = new OrbitControls(camera, webglEl);
  controls.rotateSpeed = -1; // do they want it to be inverted?
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = false;
  controls.maxPolarAngle = 2; // Radians
  controls.minPolarAngle = 1; // Radians

  // Rendering
  const render = () => {
    controls.update();
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  render();

  //Resize
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onWindowResize, false);

  // // Placing hotspots
  // let positions = [new THREE.Vector3(-10, 0, 5), new THREE.Vector3(5, 0, 0)];
  // let spriteMap = new THREE.TextureLoader().load('/scenario-hotspot.png');
  // positions.forEach((pos, i) => {
  //   let spriteMaterial = new THREE.SpriteMaterial({
  //     map: spriteMap,
  //   });
  //   let sprite = new THREE.Sprite(spriteMaterial);
  //   sprite.position.copy(pos);
  //   scene.add(sprite);
  // });

  // // Clicking hotspots
  // const rayCaster = new THREE.Raycaster();
  // const panelOne = document.querySelector('.panel--one');
  // function onClick(e) {
  //   let mouse = new THREE.Vector2(
  //     (e.clientX / window.innerWidth) * 2 - 1,
  //     -(e.clientY / window.innerHeight) * 2 + 1
  //   );
  //   rayCaster.setFromCamera(mouse, camera);
  //   let intersects = rayCaster.intersectObjects(scene.children);
  //   intersects.forEach((intersect) => {
  //     if (intersect.object.type === 'Sprite') {
  //       panelOne.style.display = 'block';
  //       panelOne.style.opacity = 1;
  //     }
  //   });
  // }
  // container.addEventListener('click', onClick);

  // Placing hotspots
  let positions = [];
  hotspots.forEach((hotspot, i) => {
    const x = hotspot.position[0];
    const y = hotspot.position[1];
    const z = hotspot.position[2];
    positions.push(new THREE.Vector3(x, y, z));
    let spriteMap = new THREE.TextureLoader().load(hotspot.sprite);
    let spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap });
    let sprite = new THREE.Sprite(spriteMaterial);
    let pos = positions[i];
    sprite.position.copy(pos);
    sprite.name = i;
    scene.add(sprite);
  });

  const stopVideo = function (element) {
    const iframe = element.querySelector('iframe');
    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
  };

  // Closing panels
  const panels = document.querySelectorAll('.hotspot');
  const buttonCloseArr = document.querySelectorAll('.hotspot-close');
  const closePanels = () => {
    panels.forEach((panel) => {
      stopVideo(panel);
      panel.style.display = 'none';
      panel.style.opacity = 0;
    });
  };
  buttonCloseArr.forEach((btn) => {
    btn.addEventListener('click', closePanels);
  });

  // Clicking hotspots
  const rayCaster = new THREE.Raycaster();
  function onClick(e) {
    let mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );
    rayCaster.setFromCamera(mouse, camera);
    let intersects = rayCaster.intersectObjects(scene.children);
    intersects.forEach((intersect) => {
      const hit = intersect.object;
      if (hit.type === 'Sprite') {
        closePanels();
        const targetPanel = panels[hit.name];
        targetPanel.style.display = 'block';
        targetPanel.style.opacity = 1;
      }
    });
  }
  container.addEventListener('click', onClick);
};

const renderPanel = (hotspot, i) => {
  switch (hotspot.type) {
    case 'video':
      return <PanelVideo hotspot={hotspot} key={i} />;
    case 'pdf':
      return <PanelPdf hotspot={hotspot} key={i} />;
    case 'link':
      return <PanelLink hotspot={hotspot} key={i} />;
    default:
      return null;
  }
};

const PanoViewer = ({ imageSrc, hotspots }) => {
  useEffect(() => {
    createPano(imageSrc, hotspots);
  }, []);

  return (
    <div className='wrapper'>
      <div className={styles.container} id='container'>
        <div className={styles.sphere} id='sphere'></div>
        {/* <div className='panel panel--one' style={{ top: '50%' }}>
          <div className='info'>
            <div className='section section-close'>
              <button className='btn-close'>
                Close [<span>X</span>]
              </button>
            </div>
            <div className='section'>
              <div className='title operation'>[ROLE]</div>
              <div className='name operation'>
                Cyberspace Communication Specialist
              </div>
            </div>
            <div className='section'>
              <div className='title'>[WESBITE LINK]</div>
              <iframe
                className='iframe'
                title='recruitment'
                width='300'
                height='200'
                src='https://www.raf.mod.uk/recruitment/roles/roles-finder/cyberspace/cyberspace-communication-specialist'
              ></iframe>
            </div>
            <div className='section'>
              <div className='title'>[INFO]</div>
              <div className='description'>
                Explore this role and more by clicking on the button below
              </div>
            </div>
            <div className='section-launch'>
              <button className='btn btn-operation'>FIND OUT MORE</button>
            </div>
          </div>
        </div> */}
        {/* <div className={styles.ui}>
          <div className={styles.row}>
          </div>
        </div> */}
      </div>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.countdownContainer}>
        <Countdown />
      </div>
      <div className={styles.aroundContainer}>
        <img src='/360.png' alt='' />
      </div>
      {/* <PanelVideo hotspot={hotspots[0]} /> */}
      {/* {hotspots.map((hotspot) => {
        switch(hotspot.type) {
          case "video":
            return <PanelVideo hotspot={hotspot}
        }
      })} */}
      {hotspots.map((hotspot, i) => renderPanel(hotspot, i))}
    </div>
  );
};

export default PanoViewer;
// export default withTransition(PanoViewer);
