// src/threeSetup.js
import * as THREE from 'three';

// Set up the camera
const camera = new THREE.PerspectiveCamera(90, 16 / 9, 0.1, 1000);

// Set the initial position of the camera
camera.position.set(0, 0, 5);

// Set the initial orientation of the camera
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Export the camera so it can be used in other files
export { camera };