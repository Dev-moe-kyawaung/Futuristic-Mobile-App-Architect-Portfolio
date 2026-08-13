import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 300;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particleCount = 2000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 800;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 800;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 800;

    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i * 3] = 0; colors[i * 3 + 1] = 0.95; colors[i * 3 + 2] = 1;
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 1; colors[i * 3 + 1] = 0.16; colors[i * 3 + 2] = 0.62;
    } else {
      colors[i * 3] = 0.68; colors[i * 3 + 1] = 1; colors[i * 3 + 2] = 0;
    }
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 2.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.0015;
    particles.rotation.x += 0.0008;
    particles.rotation.y += mouseX * 0.002;
    particles.rotation.x += mouseY * 0.002;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
