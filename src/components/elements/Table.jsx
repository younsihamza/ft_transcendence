import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

function Net() {
  return (
    <mesh position={[0, 0.2, -2]}>
      <boxGeometry args={[4, 0.4, 0.1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Padels({ position }) {
  const [key, getKeysClicked] = useKeyboardControls();
  const factore = useRef(0.5)
  const padels = useLoader(OBJLoader, 'pad.obj')
  useFrame((state) => {
    // console.log(state)
    const move = ref.current.translation()
    const rotation = ref.current.rotation()
    const { forward, backward, leftward, rightward, jump } = getKeysClicked();
    // console.log(ref.current.translation())
    if (forward) move.z += 0.1;
    if (backward) move.z -= 0.1;
    if (rightward) {
      move.x -= 0.1;
      // if (move.x >= -0.3 && move.x <= 0.3 && factore.current + 0.1 <= 0.5) {
      //   factore.current += 0.1
      //   rotation.z = Math.PI * factore.current
      //   console.log(factore.current)
      // }
    }
    if (leftward) {
      move.x += 0.1;

      // if (move.x > -0.3 && move.x < 0.3 && factore.current - 0.1 >= -0.5) {
      //   factore.current -= 0.1
      //   console.log(factore.current)
      //   rotation.z = Math.PI * factore.current
      // }
    }
    // console.log("move : ", move)
    move.x = Math.max(-2, Math.min(2, move.x))
    move.z = Math.max(-2.5 - 4, Math.min(-2.7, move.z))
    ref.current.setNextKinematicRotation(rotation)
    ref.current.setNextKinematicTranslation(move)
  });
  const ref = useRef();
  return (
    <RigidBody colliders='trimesh' type='kinematicPosition' ref={ref} position={position} rotation={[-Math.PI * 0.5, 0, 0]}>
      {/* <mesh position={position}>
        <boxGeometry args={[0.8, 0.2, 0.1]} />
        <meshStandardMaterial />
      </mesh> */}
      <primitive object={padels} scale={0.03} />
    </RigidBody>
  );
}
function MyPart({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[4, 0.3, 4]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
}
function OtherPart({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[4, 0.3, 4]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
}

export default function Table() {
  return (
    <>
      <RigidBody colliders={"hull"} type="fixed">
        <MyPart position={[0, -0.15, 0]} />
        <OtherPart position={[0, -0.15, -4]} />
      </RigidBody>
      <Padels position={[0, 0.3, 1.95]} />
      <Padels position={[0, 0.3, -1.95 - 4]} />
      <Net />
    </>
  );
}
