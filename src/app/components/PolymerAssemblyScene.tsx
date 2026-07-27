"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type PolymerAssemblySceneProps = {
  progress: number;
};

function smoothstep(value: number, start: number, end: number) {
  const t = THREE.MathUtils.clamp((value - start) / (end - start), 0, 1);
  return t * t * (3 - 2 * t);
}

export function PolymerAssemblyScene({ progress }: PolymerAssemblySceneProps) {
  const assemblyRef = useRef<THREE.Group>(null);
  const rearHousingRef = useRef<THREE.Mesh>(null);
  const frontHousingRef = useRef<THREE.Mesh>(null);
  const rearSealRef = useRef<THREE.Mesh>(null);
  const frontSealRef = useRef<THREE.Mesh>(null);
  const failureRef = useRef<THREE.Mesh>(null);
  const recoveryRef = useRef<THREE.Mesh>(null);

  useFrame(({ camera, clock }, delta) => {
    const approach = smoothstep(progress, 0.04, 0.32);
    const separate = smoothstep(progress, 0.26, 0.58);
    const failure = smoothstep(progress, 0.52, 0.76);
    const resolve = smoothstep(progress, 0.74, 0.97);

    const targetCamera = new THREE.Vector3(
      THREE.MathUtils.lerp(0.5, -0.25, approach),
      THREE.MathUtils.lerp(1.2, 0.5, approach),
      THREE.MathUtils.lerp(8.2, 5.2, approach),
    );
    camera.position.lerp(targetCamera, 1 - Math.pow(0.001, delta));
    camera.lookAt(0, 0, 0);

    if (assemblyRef.current) {
      assemblyRef.current.rotation.x = THREE.MathUtils.lerp(-0.28, -0.08, approach);
      assemblyRef.current.rotation.y = -0.42 + progress * 0.34 + Math.sin(clock.elapsedTime * 0.28) * 0.018;
      assemblyRef.current.position.y = Math.sin(clock.elapsedTime * 0.45) * 0.025;
    }

    if (rearHousingRef.current) rearHousingRef.current.position.z = THREE.MathUtils.lerp(-0.42, -1.32, separate);
    if (frontHousingRef.current) frontHousingRef.current.position.z = THREE.MathUtils.lerp(0.42, 1.32, separate);
    if (rearSealRef.current) rearSealRef.current.position.z = THREE.MathUtils.lerp(-0.13, -0.58, separate);
    if (frontSealRef.current) frontSealRef.current.position.z = THREE.MathUtils.lerp(0.13, 0.58, separate);

    if (failureRef.current) {
      const material = failureRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = Math.max(0, failure * (1 - resolve));
      failureRef.current.scale.setScalar(THREE.MathUtils.lerp(0.72, 1.06, failure));
    }

    if (recoveryRef.current) {
      const material = recoveryRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = resolve * 0.72;
      recoveryRef.current.scale.setScalar(THREE.MathUtils.lerp(0.84, 1.12, resolve));
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={3.2} color="#f2eee5" />
      <directionalLight position={[-4, 1, 3]} intensity={1.3} color="#7f9da5" />
      <pointLight position={[1.8, -1.5, 3]} intensity={18} distance={8} color="#bd7246" />

      <group ref={assemblyRef}>
        <mesh ref={rearHousingRef} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[2.05, 0.44, 48, 160]} />
          <meshStandardMaterial color="#242827" metalness={0.92} roughness={0.27} />
        </mesh>

        <mesh ref={rearSealRef} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[1.57, 0.24, 44, 144]} />
          <meshPhysicalMaterial color="#171b1a" roughness={0.48} metalness={0.03} clearcoat={0.16} />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.22, 1.22, 0.32, 96]} />
          <meshPhysicalMaterial color="#152124" roughness={0.22} transmission={0.08} transparent opacity={0.92} />
        </mesh>

        <mesh ref={frontSealRef} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[1.57, 0.24, 44, 144]} />
          <meshPhysicalMaterial color="#202624" roughness={0.4} metalness={0.02} clearcoat={0.2} />
        </mesh>

        <mesh ref={frontHousingRef} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <torusGeometry args={[2.05, 0.44, 48, 160]} />
          <meshStandardMaterial color="#303534" metalness={0.94} roughness={0.23} />
        </mesh>

        <mesh ref={failureRef} position={[0.92, 0.78, 0.18]} rotation={[0.32, 0.12, -0.68]}>
          <capsuleGeometry args={[0.07, 1.05, 10, 18]} />
          <meshStandardMaterial color="#ff9b58" emissive="#d95f2b" emissiveIntensity={3.2} transparent opacity={0} />
        </mesh>

        <mesh ref={recoveryRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.57, 0.3, 40, 144]} />
          <meshStandardMaterial color="#8fb4b3" emissive="#507d7f" emissiveIntensity={1.4} transparent opacity={0} />
        </mesh>
      </group>
    </>
  );
}
