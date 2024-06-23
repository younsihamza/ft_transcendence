import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import Game from "./components/game";

function App() {
  return (
    <KeyboardControls map={[
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
      { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      { name: "jump", keys: ["Space"] }]
      }>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <directionalLight position={[0, 1, 3]} />
        <Game />
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
