import { useEffect, useState } from 'react';
import {
  debugLaunch,
  debugLive,
  easeInOut,
  debugHoldingLink,
  debugConfig,
} from '../utils/helpers';
import useContentful from '../utils/useContentful';
import ScenarioLoader from './scenarioLoader';
import Logo from './logo';
import Countdown from './countdown';
import Back from './back';
import PanelVideo from './panelVideo';
import PanelPdf from './panelPdf';
import PanelLink from './panelLink';
import PanelFind from './panelFind';
import PanelText from './panelText';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
// import withTransition from './withTransition';

import styles from '../styles/PanoViewer.module.css';
// import { VectorKeyframeTrack } from 'three';

let allowControls = true;

const stopVideo = function (element) {
  const iframe = element.querySelector('iframe');
  if (iframe) {
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
};

const createPano = (imageSrc, hotspots) => {
  // Element variables
  const container = document.getElementById('container');
  const webglEl = document.getElementById('sphere');
  let width = window.innerWidth,
    height = window.innerHeight;

  // Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
  camera.position.x = 0.1;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  webglEl.appendChild(renderer.domElement);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Material
  const map = new THREE.TextureLoader().load(imageSrc);
  const side = THREE.DoubleSide;
  const sphereMaterial = new THREE.MeshBasicMaterial({
    map,
    side,
  });
  // const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
  const sphereGeometry = new THREE.SphereGeometry(20, 60, 40);
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.scale.x = -1;
  scene.add(sphere);

  // Controls
  const controls = new OrbitControls(camera, webglEl);
  controls.addEventListener('change', function () {
    onCameraChange();
  });
  let mouseDown = false;
  // let allowControls = true;
  controls.rotateSpeed = -0.5; // do they want it to be inverted?
  controls.enableDamping = true;
  controls.dampingFactor = 0.15;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = false;
  controls.maxPolarAngle = 2; // Radians
  controls.minPolarAngle = 1; // Radians

  // Rendering
  const render = () => {
    controls.enabled = allowControls;
    controls.update();
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  };
  render();

  // Placing hotspots
  let positions = [];
  hotspots.forEach((hotspot, i) => {
    const x = hotspot.position[0];
    const y = hotspot.position[1];
    const z = hotspot.position[2];
    positions.push(new THREE.Vector3(x, y, z));
    // let spriteMap = new THREE.TextureLoader().load(hotspot.sprite);
    let spriteMap = new THREE.TextureLoader().load('/scenario-hotspot.png');
    let spriteMaterial = new THREE.SpriteMaterial({
      map: spriteMap,
      sizeAttenuation: false,
    });
    spriteMaterial.magFilter = 'nearest';
    let sprite = new THREE.Sprite(spriteMaterial);
    let pos = positions[i];
    sprite.position.copy(pos);
    sprite.name = i;
    sprite.scale.set(0.1, 0.1, 0.1);
    scene.add(sprite);
  });

  // Set annotation position
  const annotations = document.querySelectorAll('#annotation');
  const frustrum = new THREE.Frustum();
  console.log(frustrum);

  const updateAnnotationPositions = () => {
    frustrum.setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      )
    );
    annotations.forEach((annotation, i) => {
      const x = hotspots[i].position[0];
      const y = hotspots[i].position[1];
      const z = hotspots[i].position[2];
      const vector = new THREE.Vector3(x, y, z);
      if (frustrum.containsPoint(vector)) {
        vector.project(camera);
        vector.x = ((vector.x + 1) * width) / 2;
        vector.y = (-(vector.y - 1) * height) / 2;
        vector.z = 0;
        annotation.style.pointerEvents = 'all';
        annotation.style.opacity = 1;
        annotation.style.left = `${vector.x + 30}px`;
        annotation.style.top = `${vector.y + 20}px`;
      } else {
        annotation.style.pointerEvents = 'none';
        annotation.style.opacity = 0;
      }
    });
  };

  updateAnnotationPositions();

  const onCameraChange = () => {
    // -> debounce this?
    // setAnnotationPosition(new THREE.Vector3(-10, 0, 5), 'General Technician');
    updateAnnotationPositions();
  };

  // Resize
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    width = window.innerWidth;
    height = window.innerHeight;
    updateAnnotationPositions();
  };
  window.addEventListener('resize', onWindowResize, false);

  // Stopping video
  // const stopVideo = function (element) {
  //   const iframe = element.querySelector('iframe');
  //   if (iframe) {
  //     const iframeSrc = iframe.src;
  //     iframe.src = iframeSrc;
  //   }
  // };

  // Closing panels
  const panels = document.querySelectorAll('.hotspot');
  console.log(panels);
  const buttonCloseArr = document.querySelectorAll('.hotspot-close');
  const closePanels = () => {
    panels.forEach((panel) => {
      stopVideo(panel);
      panel.style.display = 'none';
      panel.style.opacity = 0;
    });
    allowControls = true;
  };
  buttonCloseArr.forEach((btn) => {
    btn.addEventListener('click', closePanels);
  });

  //Hovering hotspots -> debounce this?
  const children = scene.children;
  const sprites = children.filter((child) => child.type === 'Sprite');
  console.log('sprites = ', sprites);
  const onDocumentMouseMove = (e) => {
    let mouse = new THREE.Vector2();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    rayCaster.setFromCamera(mouse, camera);
    let intersects = rayCaster.intersectObjects(scene.children);
    if (intersects.length > 1) {
      container.style.cursor = 'pointer';
      // const spr = intersects[0].object;
      // // spr && spr.scale.set(0.15, 0.15, 0.15);
      // let time = 0;
      // const start = 0.1;
      // const increment = 0.005;
      // let position = start;
      // const finish = 0.15;
      // const move = () => {
      //   position += increment;
      //   if (position >= finish) {
      //     clearInterval(handler);
      //     return;
      //   }
      // };
      // const handler = setInterval(move, 1000 / 60);
      // spr && spr.scale.set(position, position, position);
      // spr && console.log(spr);
      // console.log(spr);
    } else {
      // sprites.forEach((spr) => {
      //   spr && spr.scale.set(0.1, 0.1, 0.1);
      // });
      mouseDown
        ? (container.style.cursor = 'grabbing')
        : (container.style.cursor = 'grab');
    }
  };
  container.addEventListener('mousemove', onDocumentMouseMove);

  // Clicking hotspots
  const rayCaster = new THREE.Raycaster();
  const onClick = (e) => {
    mouseDown = true;
    let mouse = new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );
    rayCaster.setFromCamera(mouse, camera);
    let intersects = rayCaster.intersectObjects(scene.children);
    const intersectVector = intersects[0].point.normalize().multiplyScalar(18);
    console.log(
      `${Math.round(intersectVector.x * 10) / 10}, ${
        Math.round(intersectVector.y * 10) / 10
      }, ${Math.round(intersectVector.z * 10) / 10}`
    );
    intersects.forEach((intersect) => {
      const hit = intersect.object;
      if (hit.type === 'Sprite' && hit.name !== 'text') {
        closePanels();
        if (hit.name === 0) {
          // console.log('find your role');
          console.log(debugConfig.holdingLink);
          window.open(debugConfig.holdingLink, '_blank');
        } else if (hit.name === 1) {
          window.open(
            'https://www.raf.mod.uk/recruitment/apply?utm_source=virtual_event&utm_medium=referral&utm_campaign=RAF&utm_content=RAFWorld-Event-Application-84334',
            '_blank'
          );
        } else {
          allowControls = false;
          const targetPanel = panels[hit.name];
          targetPanel.style.display = 'block';
          targetPanel.style.opacity = 1;
        }
      }
    });
    container.style.cursor = 'grabbing';
  };
  container.addEventListener('mousedown', onClick);

  // Handle release
  const onRelease = (e) => {
    mouseDown = false;
    container.style.cursor = 'grab';
  };
  container.addEventListener('mouseup', onRelease);
};

const renderPanel = (hotspot, i) => {
  switch (hotspot.type) {
    case 'video':
      return <PanelVideo hotspot={hotspot} key={i} />;
    case 'pdf':
      return <PanelPdf hotspot={hotspot} key={i} />;
    case 'link':
      return <PanelLink hotspot={hotspot} key={i} />;
    case 'find':
      return <PanelFind hotspot={hotspot} key={i} />;
    case 'text':
      return <PanelText hotspot={hotspot} key={i} />;
    case 'new':
      window.open(hotspot.link, '_blank');
      return null;
    default:
      return null;
  }
};

const renderAnnotation = (hotspot, i) => {
  return (
    <div
      // className={styles.annotation}
      className={`${styles.annotation} noselect`}
      id='annotation'
      key={i}
      style={{ backgroundColor: hotspot.colour ? '#1F2E54' : '#c60c30' }}
      onClick={(e) => {
        // closePanels();
        // allowControls = false;
        // const panels = document.querySelectorAll('.hotspot');
        // const targetPanel = panels[hit.name];
        // targetPanel.style.display = 'block';
        // targetPanel.style.opacity = 1;
        // console.log(e);
        const panels = document.querySelectorAll('.hotspot');

        // closePanels();
        // if (hit.name === 0) {
        //   // console.log('find your role');
        //   window.open(debugHoldingLink, '_blank');
        // } else {
        //   allowControls = false;
        //   const targetPanel = panels[hit.name];
        //   targetPanel.style.display = 'block';
        //   targetPanel.style.opacity = 1;
        // }

        panels.forEach((panel) => {
          stopVideo(panel);
          panel.style.display = 'none';
          panel.style.opacity = 0;
        });
        // if (i !== 0 || i !== 1) {
        // allowControls = false;
        // const targetPanel = panels[i];
        // targetPanel.style.display = 'block';
        // targetPanel.style.opacity = 1;
        // } else if (i === 0) {
        //   window.open(debugConfig.holdingLink, '_blank');
        // } else if (i === 1) {
        // window.open(
        //   'https://www.raf.mod.uk/recruitment/apply?utm_source=virtual_event&utm_medium=referral&utm_campaign=RAF&utm_content=RAFWorld-Event-Application-84334',
        //   '_blank'
        // );
        // }
        if (i === 0) {
          window.open(debugConfig.holdingLink, '_blank');
        } else if (i === 1) {
          window.open(
            'https://www.raf.mod.uk/recruitment/apply?utm_source=virtual_event&utm_medium=referral&utm_campaign=RAF&utm_content=RAFWorld-Event-Application-84334',
            '_blank'
          );
        } else {
          allowControls = false;
          const targetPanel = panels[i];
          targetPanel.style.display = 'block';
          targetPanel.style.opacity = 1;
        }
      }}
    >
      {hotspot.title.toUpperCase()}
    </div>
  );
};

const PanoViewer = ({
  imageSrc,
  hotspots,
  launch,
  live,
  scenario,
  duration,
}) => {
  const [config, setConfig] = useState(debugConfig);
  const { getConfig } = useContentful();
  useEffect(async () => {
    createPano(imageSrc, hotspots);
    setConfig(debugConfig);
    getConfig().then((res) => setConfig(res));
    // const configRetrieved = await getConfig();
    // if (configRetrieved) {
    //   console.log('config retrieved');
    //   setConfig(configRetrieved);
    // }
  }, []);

  return (
    <div className='wrapper'>
      <div className={styles.container} id='container'>
        <div className={styles.sphere} id='sphere'></div>
      </div>
      {/* <div className={styles.header}> */}
      <div className={`${styles.header} ${'noselect'}`}>
        <Logo />
        {/* <Countdown launch={debugLaunch} live={debugLive} changeToIcon={true} /> */}
        {/* <Countdown launch={launch} live={live} changeToIcon={true} /> */}
        <Countdown
          launch={config.launchTime}
          live={config.live}
          changeToIcon={true}
        />
      </div>
      {/* <div className={styles.footer}> */}
      <div className={`${styles.footer} ${'noselect'}`}>
        <Back setWidth={100} noPadding={true} />
        <img className={styles.around} src='/360.png' alt='' />
      </div>
      {hotspots.map((hotspot, i) => renderAnnotation(hotspot, i))}
      {hotspots.map((hotspot, i) => renderPanel(hotspot, i))}
      <ScenarioLoader scenario={scenario} duration={duration} />
    </div>
  );
};

export default PanoViewer;
// export default withTransition(PanoViewer);
