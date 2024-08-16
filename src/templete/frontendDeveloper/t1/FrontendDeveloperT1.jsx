import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef();

  // Load the texture using useLoader
  const earthTexture = useLoader(THREE.TextureLoader, "/earth2.jpg");

  useFrame(() => {
    earthRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed

  });

  return (
    <>
      {/* Earth Sphere with Loaded Texture */}
      <Sphere ref={earthRef}  args={[1, 64, 64]}>
        <meshStandardMaterial map={earthTexture} />
      </Sphere>

      {/* Water Sphere (slightly larger and transparent) */}
    </>
  );
}
function Sun() {
  const Sunref = useRef();

  // Load the texture using useLoader
  const sunTextures = useLoader(THREE.TextureLoader, "/sun.jpg");

  useFrame(() => {
    Sunref.current.rotation.y += 0.01; // Adjust the rotation speed as needed

  });

  return (
    <>
      {/* Earth Sphere with Loaded Texture */}
      <Sphere ref={Sunref}  args={[1, 64, 64]}>
        <meshStandardMaterial map={sunTextures} />
      </Sphere>

      {/* Water Sphere (slightly larger and transparent) */}
    </>
  );
}

function FrontendDeveloperT1() {
  return (
    <>
    <Canvas style={{ height: "100vh", backgroundColor: "#000" }}>
      <ambientLight intensity={10} />
      {/* <directionalLight position={[2, 2, 2]} /> */}

      {/* Earth and Water */}
      <Earth />
      {/* <Sun/> */}

      {/* Controls for orbiting the camera */}
      {/* <OrbitControls /> */}
    </Canvas>
    <Canvas style={{ height: "50vh", backgroundColor: "#000" }}>
    <ambientLight intensity={10} />
    {/* <directionalLight position={[2, 2, 2]} /> */}

    {/* Earth and Water */}
    {/* <Earth /> */}
    <Sun/>

    {/* Controls for orbiting the camera */}
    {/* <OrbitControls /> */}
  </Canvas></>
    
  );
}

export default FrontendDeveloperT1;
