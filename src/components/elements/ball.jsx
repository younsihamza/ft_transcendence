import { RigidBody } from "@react-three/rapier";

export default function Ball({position}){
    return <RigidBody colliders='ball' position={position}  restitution={2} friction={0}>
        <mesh position={[0,1,0]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial />
        </mesh>
    </RigidBody>
}