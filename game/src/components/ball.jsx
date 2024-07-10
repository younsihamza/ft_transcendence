import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function Ball()
{
    const positionPall = useRef({vx: 0.05, vz: 0.05, x: 0, z: 0.1 })
    const ref =  useRef()
    useFrame(()=>{
        positionPall.current.x += positionPall.current.vx 
        positionPall.current.z += positionPall.current.vz
        if( positionPall.current.z >= 2 || positionPall.current.z <= -2 )
            positionPall.current.vz *= -1   
        if( positionPall.current.x >= 1 || positionPall.current.x <= -1 )
            positionPall.current.vx *= -1   
        ref.current.position.x = positionPall.current.x
        ref.current.position.z = positionPall.current.z

    })
    return (
        <mesh position={[0,0.1,0]} ref={ref}>
            <sphereGeometry args={[0.03]}/>
            <meshStandardMaterial color={'red'}/>
        </mesh>
    )
}