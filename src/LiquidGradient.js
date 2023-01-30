import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useMemo, useRef } from "react";
import * as THREE from "three";

const fragmentShader = `
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;
    const int AMOUNT = 10;
    void main()
    {
        vec2 coord = 4.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);
        vec2 mouse = 4.0 * (u_mouse.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);

        float len;

        for (int i = 0; i < AMOUNT; i++){
              len = length(vec2(coord.x, coord.y));

              coord.x = coord.x - cos(coord.y + sin(len) - mouse.y) + cos(u_time / 9.0);
              coord.y = coord.y + sin(coord.x + cos(len) - mouse.x) + sin(u_time / 12.0);
            }
        gl_FragColor = vec4(cos(len * 5.1) + 0.5, cos(len * 1.2) + 0.1, cos(len * 1.2) + 0.5, 1.0);
    }`;

const LiquidGradient = (props) => {
  const mesh = useRef();
  const data = useMemo(
    () => ({
      uniforms: {
        u_time: { type: "f", value: 0.0 },
        u_resolution: {
          value: new THREE.Vector2(
            props.dimensions.clientHeight,
            props.dimensions.clientWidth
          ),
        },
        u_mouse: {
          value: new THREE.Vector2(
            props.mousePos.y,
            props.mousePos.x
          ),
        }
      },
      fragmentShader,
    }),
    []
  );

  useFrame((state) => {
    data.uniforms.u_time.value = state.clock.getElapsedTime();
    data.uniforms.u_mouse.value = new THREE.Vector2(props.mousePos.y, props.mousePos.x);
  });

  return (
    <mesh ref={mesh} matrixAutoUpdate="false">
    <boxBufferGeometry args={[20, 5, 5]} />
    <shaderMaterial
    attach="material"
    uniforms={data.uniforms}
    fragmentShader={data.fragmentShader}
    />
    </mesh>
  );
};

export default function LiquidGradientCanvas(props) {
  console.log(props);
  return (
    <Canvas>
    <LiquidGradient dimensions= {props.dimensions} mousePos={props.mousePos}  />
    </Canvas>
  );
}
