export default function OtherPlayer() {
  return (
    <>
      <mesh position={[1, 0.1, -1.92]}>
        <boxGeometry args={[0.5, 0.1, 0.05]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}
