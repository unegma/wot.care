import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {useFrame} from "@react-three/fiber";
const ITEM_URI = `${process.env.REACT_APP_ASSETS_URL}/tom-idle.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Guy1a001: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    ['default.004']: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
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
        <group name="Scene">
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh name="Guy1a001" geometry={nodes.Guy1a001.geometry} material={materials['default.004']} skeleton={nodes.Guy1a001.skeleton} />
          </group>
        </group>
    </group>
  )
}

