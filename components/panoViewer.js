import { useEffect } from 'react';
import { debugLaunch, debugLive } from '../utils/helpers';
import Logo from './logo';
import Countdown from './countdown';
import Back from './back';
import PanelVideo from './panelVideo';
import PanelPdf from './panelPdf';
import PanelLink from './panelLink';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
// import withTransition from './withTransition';

import styles from '../styles/PanoViewer.module.css';
// import { VectorKeyframeTrack } from 'three';

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
  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.scale.x = -1;
  scene.add(sphere);

  // Controls
  const controls = new OrbitControls(camera, webglEl);
  controls.addEventListener('change', function () {
    onCameraChange();
  });
  let mouseDown = false;
  let allowControls = true;
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
    let spriteMap = new THREE.TextureLoader().load(hotspot.sprite);
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
        annotation.style.opacity = 1;
        annotation.style.left = `${vector.x + 30}px`;
        annotation.style.top = `${vector.y + 20}px`;
      } else {
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
    allowControls = true;
  };
  buttonCloseArr.forEach((btn) => {
    btn.addEventListener('click', closePanels);
  });

  //Hovering hotspots -> debounce this?
  const onDocumentMouseMove = (e) => {
    let mouse = new THREE.Vector2();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    rayCaster.setFromCamera(mouse, camera);
    let intersects = rayCaster.intersectObjects(scene.children);
    if (intersects.length > 1) {
      container.style.cursor = 'pointer';
    } else {
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
    intersects.forEach((intersect) => {
      const hit = intersect.object;
      if (hit.type === 'Sprite' && hit.name !== 'text') {
        // if (hit.type === 'Sprite') {
        // console.log(hit);
        closePanels();
        allowControls = false;
        const targetPanel = panels[hit.name];
        targetPanel.style.display = 'block';
        targetPanel.style.opacity = 1;
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
    default:
      return null;
  }
};

const renderAnnotation = (hotspot, i) => {
  return (
    <div className={styles.annotation} id='annotation' key={i}>
      {hotspot.title.toUpperCase()}
    </div>
  );
};

const PanoViewer = ({ imageSrc, hotspots }) => {
  useEffect(() => {
    createPano(imageSrc, hotspots);
  }, []);

  return (
    <div className='wrapper'>
      <div className={styles.container} id='container'>
        <div className={styles.sphere} id='sphere'></div>
      </div>
      <div className={styles.header}>
        <Logo />
        <Countdown launch={debugLaunch} live={debugLive} changeToIcon={true} />
      </div>
      <div className={styles.footer}>
        <Back setWidth={100} noPadding={true} />
        <img className={styles.around} src='/360.png' alt='' />
      </div>
      {hotspots.map((hotspot, i) => renderAnnotation(hotspot, i))}
      {hotspots.map((hotspot, i) => renderPanel(hotspot, i))}
    </div>
  );
};

export default PanoViewer;
// export default withTransition(PanoViewer);
