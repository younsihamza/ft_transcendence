export default function OtherPlayer() {
  return (
    <>
      <mesh position={[0, 0.1, -0.92]}>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}
