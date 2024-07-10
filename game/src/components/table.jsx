import { RigidBody } from "@react-three/rapier";

export default function Table() {
  return (
    <>
    <RigidBody colliders='cuboid' type='fixed'>
      <mesh>
        <boxGeometry args={[2, 0.1, 4]} />
        <meshStandardMaterial />
      </mesh>
    </RigidBody>
    </>
  );
}
