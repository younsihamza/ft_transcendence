import { RigidBody } from "@react-three/rapier";

export default function Table() {
  return (
      <mesh position={[1,0,0]}>
        <boxGeometry args={[2, 0.1, 4]} />
        <meshStandardMaterial />
      </mesh>
  );
}
