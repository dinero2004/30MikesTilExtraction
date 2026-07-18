"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader, OrbitControls } from "three-stdlib";

export default function ObjViewer() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#080a0b");
    scene.fog = new THREE.Fog("#080a0b", 8, 16);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 1.3, 6.8);
    camera.lookAt(0, 0.7, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    mountNode.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xd9c79f, 0x111315, 1.65));

    const keyLight = new THREE.DirectionalLight(0xffe1a3, 3.2);
    keyLight.position.set(4, 7, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xe6493f, 2.4);
    rimLight.position.set(-5, 2, -4);
    scene.add(rimLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 3.8;
    controls.maxDistance = 9;
    controls.target.set(0, 0.65, 0);

    const textureLoader = new THREE.TextureLoader();
    const baseColor = textureLoader.load("/models/textures/T_Stahlritter-42_BC.png");
    const normalMap = textureLoader.load("/models/textures/T_Stahlritter-42_N.png");
    const ormMap = textureLoader.load("/models/textures/T_Stahlritter-42_ORM.png");
    baseColor.colorSpace = THREE.SRGBColorSpace;

    let loadedObject: THREE.Object3D | null = null;
    let disposed = false;

    const loader = new OBJLoader();
    loader.load(
      "/models/Stahl_Ritter_42.obj",
      (object) => {
        if (disposed) return;

        object.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;

          child.material = new THREE.MeshStandardMaterial({
            map: baseColor,
            normalMap,
            roughnessMap: ormMap,
            metalnessMap: ormMap,
            metalness: 0.68,
            roughness: 0.78,
          });

          const uv = child.geometry.attributes.uv;
          if (uv && !child.geometry.attributes.uv2) {
            child.geometry.setAttribute("uv2", new THREE.BufferAttribute(uv.array, 2));
          }
        });

        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.sub(center);
        object.position.y = 0.1;
        object.scale.setScalar(1.35);

        loadedObject = object;
        scene.add(object);
      },
      undefined,
      (error) => console.error("OBJ load error:", error),
    );

    const resize = () => {
      const width = mountNode.clientWidth;
      const height = mountNode.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mountNode);
    resize();

    let animationFrame = 0;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      controls.dispose();
      baseColor.dispose();
      normalMap.dispose();
      ormMap.dispose();

      loadedObject?.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => material.dispose());
        } else {
          child.material.dispose();
        }
      });

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="size-full min-h-[560px] lg:min-h-[720px]" />;
}
