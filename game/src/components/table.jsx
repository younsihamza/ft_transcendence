import { RigidBody } from "@react-three/rapier";

export default function Table() {
  return (
    <>
    <RigidBody colliders='cuboid' type='fixed'>
      <mesh>
        <boxGeometry args={[1, 0.1, 2]} />
        <meshStandardMaterial />
      </mesh>
    </RigidBody>
    </>
  );
}
