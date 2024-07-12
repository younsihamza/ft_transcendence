import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import Game from "./components/game";
import {  PerspectiveCamera,Stage,OrbitControls, Environment } from "@react-three/drei";
import * as THREE  from 'three'
import Game from "../Components/PingPongGame/game";
import FirstPlayer from "../Components/PingPongGame/scoreBar&Header/FirstPlayer";
import SecondPlayer from "../Components/PingPongGame/scoreBar&Header/SecondPlayer";
import Timer from "../Components/PingPongGame/scoreBar&Header/Timer";
import Header from "../Components/PingPongGame/scoreBar&Header/Header";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import Win from "../Components/PingPongGame/win";



function PingPongGame() {
  const ref =useRef()
  const currentCamera = useRef(0)
  const cameraPositions = useRef([
    {rotation: {x: -Math.PI/2, y: 0, z: -Math.PI/2}, position: {x:0,y:7,z:0}},
    {rotation: {x: -Math.PI/2, y: -1, z: -Math.PI/2}, position: {x:-4,y:7,z:0}},
    {rotation: {x: 0, y: 0, z: 0}, position: {x:0,y:1,z:3.5}},
  ])
  const handleCamera = (e)=>{
    e.preventDefault()
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
  return (
    <>
      <div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
        <Header gameName={"PING PONG"}/>
        <div className=" h-[70%] relative xsm:w-[96%] md:w-[80%] max-w-[1400px] rounded-md flex justify-center items-center text-white flex-col bg-secondaryColor border-[2px] border-forthColor">
        <Win/>
        <div className=" flex  px-5 mt-5 w-[100%] justify-center items-center  max-w-[1024px] xsm:gap-2 lg:gap-9 ">
          <FirstPlayer name="hamza" level="6" image="hyounsi.png" score={2} />
          <Timer />
          <SecondPlayer name="hyounsi" level="3" image="ykhourba.jpeg" score={7}/>
        </div>
          <button className=" h-[40px] w-[60px]" onClick={handleCamera}> <VscDeviceCameraVideo className="h-[100%] w-[100%]" style={{color: 'white'}} /></button>
        <hr className="h-[2px] xsm:w-[95%] lg:w-[90%] max-w-[1400px] bg-thirdColor my-6"/>
          <Canvas >
            <PerspectiveCamera ref={ref} makeDefault rotation={[0, 0 , 0]} fov={75} position={[0, 1,3.5]}/>
            <OrbitControls/>
            <ambientLight />
            {/* <Environment preset='sunset'  background/> */}
            <Stage   adjustCamera={true} intensity={1}  environment="city" >
              <Game />
            </Stage>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default PingPongGame;