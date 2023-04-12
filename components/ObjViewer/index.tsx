import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OBJLoader as Loader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createAnimate } from './objHelpers/animate';
import RoateBar from 'components/RoateBar';
import styles from './style.module.scss'

const loader = new Loader();
const textureLoader = new THREE.TextureLoader();

export default function ObjViewer({
	pathToModel = '/models/airmax_model/air_max.obj',
	pathToModelTexture = '/models/airmax_model/textures/Airmax_Sketchfab_BaseColor.jpg',
}) {
	const containerRef = useRef();
	const [renderer, setRenderer] = useState(undefined);
	const [camera, setCamera] = useState(undefined);
	const [scene, setScene] = useState(undefined);

	useEffect(() => {
		const scene = new THREE.Scene() 
		const backgroundImage = textureLoader.load('/assets/scenBackground.jpg');

		scene.background = backgroundImage
		scene.add(new THREE.AmbientLight(0xffffff));
		setScene(scene);
		setCamera(new THREE.PerspectiveCamera(
			1,
			window.innerWidth / window.innerHeight,
			10,
			1000000 
		));
		setRenderer(new THREE.WebGLRenderer());
	}, []);

	useEffect(() => {
		if (renderer && camera && scene) {

			renderer.setSize(window.innerWidth , window.innerHeight,);
			const controls = new OrbitControls(camera, renderer.domElement);
    		controls.enableZoom = false; // disable zoom
			controls.enablePan = false;
			if (containerRef.current)
				(containerRef.current as any).appendChild(renderer.domElement);
			const animate = createAnimate({ scene, camera, renderer });
			camera.position.z = 250;
			animate.animate();

			renderModel();
		}
	}, [camera, scene]);

	const renderModel = () => {
		loader.load(pathToModel, (object) => {
		  object.traverse((child) => {
			if (child instanceof THREE.Mesh) {
			  const material = new THREE.MeshPhysicalMaterial({
				color: 0xffffff,
				map: textureLoader.load(pathToModelTexture),
				metalness: 0.5, // adjust this value to control the amount of reflection
				roughness: 0.5, // adjust this value to control the smoothness of the surface
				});
			  child.material = material;
			  child.geometry.center();
			  child.rotateY(-0.7);
			  child.rotateX(0.5);
			  child.rotateZ(0.2);
			  child.scale.set(10, 10, 10)
			}
		  });
		  scene.add(object);
		});
	};

	return (
		<>
			{/* <RoateBar /> */}
			<div ref={containerRef} />
		</>
	);
}
