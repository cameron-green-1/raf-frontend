import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import styles from '../styles/PanoViewer.module.css';

const createPano = (imageSrc) => {
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
  let deltaCount = 0;
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onWindowResize, false);
};

const PanoViewer = ({ imageSrc }) => {
  useEffect(() => {
    createPano(imageSrc);
  }, []);

  return (
    <div className='wrapper'>
      <div className={styles.container} id='container'>
        <div className={styles.sphere} id='sphere'></div>
      </div>
    </div>
  );
};

export default PanoViewer;
