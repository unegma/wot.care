import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {useFrame} from "@react-three/fiber";
const ITEM_URI = `${process.env.REACT_APP_ASSETS_URL}/doctor-idle.glb`;

type GLTFResult = GLTF & {
  nodes: {
    beard: THREE.SkinnedMesh
    Beard: THREE.SkinnedMesh
    belt: THREE.SkinnedMesh
    Vert007: THREE.SkinnedMesh
    Vert007_1: THREE.SkinnedMesh
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
    Hair: THREE.MeshStandardMaterial
    Tie: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Pants: THREE.MeshStandardMaterial
    Shirt: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Armature|Armature|mixamo.com|Layer0'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function TomIdle({ mode, lockKeyboard, setHintMessage, hintMessage, setShowHintBox, playerPosition, setPlayerPosition, scale, rotation, position, myPositionRef, finalPlacement }: any) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF(ITEM_URI) as GLTFResult
  // @ts-ignore
  // const { actions } = useAnimations<GLTFActions>(animations, group)

  // @ts-ignore
  const [mixer] = useState(() => new THREE.AnimationMixer())

  useEffect(() => {
    mixer.clipAction(animations[0], group.current).setDuration(4);
    mixer.clipAction(animations[0], group.current).play();
  }, [animations])

  useFrame((scene, delta) => {
    mixer?.update(delta)
  });

  return (
      <group scale={scale} position={position} rotation={rotation} ref={group}>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="beard" geometry={nodes.beard.geometry} material={materials.Hair} skeleton={nodes.beard.skeleton} />
          <skinnedMesh name="Beard" geometry={nodes.Beard.geometry} material={materials.Hair} skeleton={nodes.Beard.skeleton} />
          <skinnedMesh name="belt" geometry={nodes.belt.geometry} material={materials.Tie} skeleton={nodes.belt.skeleton} />
          <group name="Body001">
            <skinnedMesh name="Vert007" geometry={nodes.Vert007.geometry} material={materials.Tie} skeleton={nodes.Vert007.skeleton} />
            <skinnedMesh name="Vert007_1" geometry={nodes.Vert007_1.geometry} material={materials.Skin} skeleton={nodes.Vert007_1.skeleton} />
          </group>
          <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Tie} skeleton={nodes.Cube.skeleton} />
          <skinnedMesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.Hair} skeleton={nodes.Cube001.skeleton} />
          <skinnedMesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials.Skin} skeleton={nodes.Cube002.skeleton} />
          <skinnedMesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.Brown} skeleton={nodes.Cube003.skeleton} />
          <skinnedMesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials.Skin} skeleton={nodes.Cylinder.skeleton} />
          <skinnedMesh name="Head" geometry={nodes.Head.geometry} material={materials.Skin} skeleton={nodes.Head.skeleton} />
          <skinnedMesh name="overal" geometry={nodes.overal.geometry} material={materials.White} skeleton={nodes.overal.skeleton} />
          <skinnedMesh name="Pants" geometry={nodes.Pants.geometry} material={materials.Pants} skeleton={nodes.Pants.skeleton} />
          <skinnedMesh name="Shirt" geometry={nodes.Shirt.geometry} material={materials.Shirt} skeleton={nodes.Shirt.skeleton} />
          <skinnedMesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials.Eye} skeleton={nodes.Sphere.skeleton} />
        </group>
    </group>
  )
}

