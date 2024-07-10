import { RigidBody } from "@react-three/rapier";

export default function Walls() {
  return (
    <>
    <RigidBody type='fixed'>
      <mesh position={[1-1.05, 0.05, 0]}>
        <boxGeometry args={[0.1, 0.2, 4]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh position={[1+1.05, 0.05, 0]}>
        <boxGeometry args={[0.1, 0.2, 4]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </RigidBody>
    </>
  );
}
