import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import Game from "./components/game";
import {  PerspectiveCamera,Stage } from "@react-three/drei";
import * as THREE  from 'three'
import Game from "../Components/PingPongGame/game";


function PingPongGame() {
  const ref =useRef()
  const currentCamera = useRef(0)
  const cameraPositions = useRef([
    {rotation: {x: -Math.PI/2, y: 0, z: -Math.PI/2}, position: {x:0,y:7,z:0}},
    {rotation: {x: -Math.PI/2, y: -1, z: -Math.PI/2}, position: {x:-4,y:7,z:0}},
    {rotation: {x: 0, y: 0, z: 0}, position: {x:0,y:1,z:3.5}},
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
      <div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
        <div className="h-[50%] w-[90%] rounded-md flex justify-center items-center text-white">
          <Canvas >
            <PerspectiveCamera ref={ref}
              makeDefault
              rotation={[0, 0 , 0]}
              fov={75}dd
              position={[0, 1,3.5]}
            />
            <ambientLight />
            <Stage   adjustCamera={true} intensity={1}  environment="city" >
              <Game />
            </Stage>
          </Canvas>
        </div>
        <button className="bg-gray-300" onClick={handleCamera}>Camera {currentCamera.current}</button>
      </div>
    </>
  );
}

export default PingPongGame;