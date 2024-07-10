import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function Ball()
{
    const ref =  useRef()
    useFrame(()=>{
        const ballspeed = 0.1
        const  currentPosition = ref.current.translation()
        currentPosition.x = ballspeed*Math.cos( currentPosition.x +20)
        currentPosition.z = ballspeed*-Math.sin(currentPosition.z+20);
        ref.current.setNextKinematicTranslation(currentPosition)
        console.log(currentPosition)

    })
    return (
        <RigidBody  ref={ref} type='kinematicPosition'>
        <mesh position={[0,1,0]}>
            <sphereGeometry args={[0.03]}/>
            <meshStandardMaterial color={'blue'}/>
        </mesh>
        </RigidBody>
    )
}