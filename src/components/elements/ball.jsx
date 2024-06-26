import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Suspense, useEffect, useRef } from "react";

export default function Ball({position}){
    const ref = useRef(null);
    const count = useRef(0)

    useFrame(() => {
      if (ref.current && count.current < 5) {
        ref.current.applyImpulse({x: 0, y: 0.0, z: -0.01}, true);
        count.current++;
      }
    });
    return <Suspense>

    <RigidBody colliders='ball' position={position}  restitution={2} friction={0} ref={ref}>
        <mesh position={[0,1,0]}>
            <sphereGeometry args={[0.1]} />
            <meshStandardMaterial />
        </mesh>
    </RigidBody>
    </Suspense>
}