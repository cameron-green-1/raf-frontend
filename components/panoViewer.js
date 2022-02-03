import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';

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
  const sphereMaterial = new THREE.MeshBasicMaterial();
  sphereMaterial.map = new THREE.TextureLoader()
    // .setCrossOrigin('anonymous')
    .load(
      // 'https://res.cloudinary.com/dkcygpizo/image/upload/v1491862637/codepen/1_dtotv2.jpg'
      imageSrc
    );
  console.log(sphereMaterial);
  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.scale.x = -1;
  console.log(sphere);
  scene.add(sphere);

  // Controls
  const controls = new OrbitControls(camera, webglEl);
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

  // Resize
  let deltaCount = 0;
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onWindowResize, false);
};

const createCube = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const webglEl = document.getElementById('sphere');
  renderer.setSize(window.innerWidth, window.innerHeight);
  webglEl.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  cube.position.z = -5;
  // cube.rotation.x = 10;
  // cube.rotation.y = 5;

  // const gui = new dat.GUI();
  // setTimeout(() => console.log(gui), 2000);
  // console.log(gui);
  // gui.style.zIndex = 10;
  // gui.add(cube.rotation, 'x', 0, Math.PI * 2);
  // gui.add(cube.rotation, 'y', 0, Math.PI * 2);
  // gui.add(cube.rotation, 'z', 0, Math.PI * 2);

  // renderer.render(scene, camera);

  const animate = () => {
    // cube.rotation.x += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
};

const PanoViewer = ({ imageSrc }) => {
  useEffect(() => {
    createPano(imageSrc);
    // createCube();
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
