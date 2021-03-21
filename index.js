import * as THREE from './threejs/three.module.js';
import { STLLoader } from './threejs/STLLoader.js';
import { OrbitControls } from './threejs/OrbitControls.js';

let scene, camera, renderer, object;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    camera = new THREE.PerspectiveCamera(
        75,
        2,
        0.5,
        100
    );
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    scene.add(object);

    let control = new OrbitControls(camera, renderer.domElement);

    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 5);
    scene.add(light);

    let light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0, 0, -5);
    scene.add(light2);


    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

let loader = new STLLoader();
loader.load('3dmodels/bkp_Shoulder_Bone.stl', (model) => {
    object = new THREE.Mesh(
        model,
        new THREE.MeshLambertMaterial({ color: 0xd9d9d9 })
    );
    object.scale.set(0.1, 0.1, 0.1);
    object.position.set(0, 0, 0);
    object.rotation.x = -Math.PI / 2;
    init();
});