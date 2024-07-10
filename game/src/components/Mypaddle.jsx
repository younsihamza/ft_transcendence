import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function MyPaddle() {
    const  [, get] = useKeyboardControls()
    const ref = useRef()
    useFrame(()=>{
        const move = get()
        const currentPosition  = ref.current.translation()
        if(move.left)
            currentPosition.x -= 0.04
        if (move.right)
            currentPosition.x += 0.04
        if(currentPosition.x >-0.75 && currentPosition.x < 0.75)
            ref.current.setNextKinematicTranslation(currentPosition)
    })
  return (
    <>
    <RigidBody type='kinematicPosition' ref={ref}>
      <mesh position={[0, 0.1, 1.92]}>
        <boxGeometry args={[0.5, 0.1, 0.05]} />
        <meshStandardMaterial color={"purple"} />
      </mesh>
    </RigidBody>
    
    </>
  );
}
