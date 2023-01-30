import { Canvas } from '@react-three/fiber';
import { useRef, useMemo } from 'react';

const Cube = () => {
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      u_test: {
        value: 1.0,
      },
    }),
    []
  );

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

export default function Scene() {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};
