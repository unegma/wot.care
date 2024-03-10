import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {useFrame} from "@react-three/fiber";
const ITEM_URI = `${process.env.REACT_APP_ASSETS_URL}/doctor-talking.glb`;


type GLTFResult = GLTF & {
  nodes: {
    beard: THREE.SkinnedMesh
    Beard: THREE.SkinnedMesh
    belt: THREE.SkinnedMesh
    Vert012: THREE.SkinnedMesh
    Vert012_1: THREE.SkinnedMesh
    Cube: THREE.SkinnedMesh
    Cube001: THREE.SkinnedMesh
    Cube002: THREE.SkinnedMesh
    Cube003: THREE.SkinnedMesh
    Cylinder: THREE.SkinnedMesh
    Head: THREE.SkinnedMesh
    overal: THREE.SkinnedMesh
    Pants: THREE.SkinnedMesh
    Shirt: THREE.SkinnedMesh
    Sphere: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    ['Hair.002']: THREE.MeshStandardMaterial
    ['Tie.002']: THREE.MeshStandardMaterial
    ['Skin.002']: THREE.MeshStandardMaterial
    ['Brown.002']: THREE.MeshStandardMaterial
    ['White.002']: THREE.MeshStandardMaterial
    ['Pants.002']: THREE.MeshStandardMaterial
    ['Shirt.002']: THREE.MeshStandardMaterial
    ['Eye.002']: THREE.MeshStandardMaterial
  }
}


type ActionName = 'Armature|Armature|mixamo.com|Layer0'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function TomTalking({ speaking, setSpeaking, mode, lockKeyboard, setHintMessage, hintMessage, setShowHintBox, playerPosition, setPlayerPosition, scale, rotation, position, myPositionRef, finalPlacement }: any) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF(ITEM_URI) as GLTFResult

  // @ts-ignore
  const [mixer] = useState(() => new THREE.AnimationMixer())

  useEffect(() => {
    if (animations.length === 0 || !group.current) return;

    const action = mixer.clipAction(animations[0], group.current).setDuration(4);

    const handleFinished = () => {
      setSpeaking(false);
    };

    action.loop = THREE.LoopOnce;
    action.clampWhenFinished = true;
    // action.addEventListener('finished', handleFinished);
    const onFinish = () =>{ setSpeaking(false)};

    mixer.addEventListener('finished', onFinish );

    if (speaking) {
      action.reset().play();
    } else {
      action.stop();
    }

    return () => {
      mixer.removeEventListener('finished', onFinish );
    };
  }, [speaking, animations, mixer]); // all these may not be needed


  useFrame((scene, delta) => {
    mixer?.update(delta)
  });

  return (
    <group scale={scale} position={position} rotation={rotation} ref={group}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh name="beard" geometry={nodes.beard.geometry} material={materials['Hair.002']} skeleton={nodes.beard.skeleton} />
        <skinnedMesh name="Beard" geometry={nodes.Beard.geometry} material={materials['Hair.002']} skeleton={nodes.Beard.skeleton} />
        <skinnedMesh name="belt" geometry={nodes.belt.geometry} material={materials['Tie.002']} skeleton={nodes.belt.skeleton} />
        <group name="Body001">
          <skinnedMesh name="Vert012" geometry={nodes.Vert012.geometry} material={materials['Tie.002']} skeleton={nodes.Vert012.skeleton} />
          <skinnedMesh name="Vert012_1" geometry={nodes.Vert012_1.geometry} material={materials['Skin.002']} skeleton={nodes.Vert012_1.skeleton} />
        </group>
        <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Tie.002']} skeleton={nodes.Cube.skeleton} />
        <skinnedMesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Hair.002']} skeleton={nodes.Cube001.skeleton} />
        <skinnedMesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Skin.002']} skeleton={nodes.Cube002.skeleton} />
        <skinnedMesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Brown.002']} skeleton={nodes.Cube003.skeleton} />
        <skinnedMesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Skin.002']} skeleton={nodes.Cylinder.skeleton} />
        <skinnedMesh name="Head" geometry={nodes.Head.geometry} material={materials['Skin.002']} skeleton={nodes.Head.skeleton} />
        <skinnedMesh name="overal" geometry={nodes.overal.geometry} material={materials['White.002']} skeleton={nodes.overal.skeleton} />
        <skinnedMesh name="Pants" geometry={nodes.Pants.geometry} material={materials['Pants.002']} skeleton={nodes.Pants.skeleton} />
        <skinnedMesh name="Shirt" geometry={nodes.Shirt.geometry} material={materials['Shirt.002']} skeleton={nodes.Shirt.skeleton} />
        <skinnedMesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Eye.002']} skeleton={nodes.Sphere.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload(ITEM_URI) // load this one in as it is hidden initially
