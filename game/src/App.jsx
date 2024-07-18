import { useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Game from "./components/game";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Html } from "@react-three/drei";
import * as THREE  from 'three'

function App() {
  const ref =useRef()
  const currentCamera = useRef(0)
  const cameraPositions = useRef([
    {rotation: {x: -Math.PI/2, y: 0, z: -Math.PI/2}, position: {x:1,y:2,z:0}},
    {rotation: {x: -Math.PI/2, y: -1, z: -Math.PI/2}, position: {x:-1,y:2,z:0}},
    {rotation: {x: -0.2, y: 0, z: 0}, position: {x:1,y:1,z:3}},
  ])
  const handleCamera = ()=>{
    const { rotation, position } = cameraPositions.current[currentCamera.current];
    const vr = new THREE.Vector3(rotation.x, rotation.y, rotation.z);
    const vp = new THREE.Vector3(position.x, position.y, position.z);
    ref.current.rotation.set(...vr)
    ref.current.position.set(...vp)
    currentCamera.current += 1
    if (currentCamera.current >= cameraPositions.current.length)
      currentCamera.current = 0 
    console.log(ref.current)
  }
  // window.addEventListener('resize', (e)=>{
  //   console.log("event x: " ,window.innerWidth )
  //   console.log("event y: " ,window.innerHeight )
  //   if(window.innerWidth < 1000)
  //     cameraPositions.current[0].position.y = 3
  //   if(window.innerWidth > 1000)
  //     cameraPositions.current[0].position.y = 2
  //   console.log(cameraPositions.current)
  //   const { rotation, position } = cameraPositions.current[0];
  //   const vr = new THREE.Vector3(rotation.x, rotation.y, rotation.z);
  //   const vp = new THREE.Vector3(position.x, position.y, position.z);
  //   ref.current.rotation.set(...vr)
  //   ref.current.position.set(...vp)
  // })
  return (
    <>
      <div style={{ width: "70vw", height: "70vh", background: "black" }}>
        <Canvas>
          <PerspectiveCamera ref={ref}
            makeDefault
            rotation={[-0.2, 0 , 0]}
            fov={75}
            position={[1, 1,3]}
          />
          <ambientLight />
          <Game />
        </Canvas>
        <button onClick={handleCamera}>Camera {currentCamera.current}</button>
      </div>
    </>
  );
}

export default App;
