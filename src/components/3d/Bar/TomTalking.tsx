import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {useFrame} from "@react-three/fiber";
const ITEM_URI = `${process.env.REACT_APP_ASSETS_URL}/tom-talking.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Guy1a002: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    ['default.005']: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

type ActionName = 'Armature|Armature|mixamo.com|Layer0'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function TomTalking({ speaking, setSpeaking, mode, lockKeyboard, setHintMessage, hintMessage, setShowHintBox, playerPosition, setPlayerPosition, scale, rotation, position, myPositionRef, finalPlacement }: any) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF(ITEM_URI) as GLTFResult
  // @ts-ignore
  // const { actions } = useAnimations<GLTFActions>(animations, group)
  //
  // // @ts-ignore
  const [mixer] = useState(() => new THREE.AnimationMixer())
  //
  // useEffect(() => {
  //   mixer.clipAction(animations[0], group.current).setDuration(4);
  //
  //   if (speaking) {
  //     mixer.clipAction(animations[0], group.current).play();
  //
  //     // todo if finished speaking setSpeaking to false and await speaking to become true again before playing again
  //   }
  //
  // }, [animations])

  useEffect(() => {
    if (animations.length === 0 || !group.current) return;

    const action = mixer.clipAction(animations[0], group.current).setDuration(4);

    const handleFinished = () => {
      setSpeaking(false);

      // Optional: Implement logic to wait for `speaking` to become true again
      // This could be based on some external event or condition.
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
        <group name="Scene">
          <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh name="Guy1a002" geometry={nodes.Guy1a002.geometry} material={materials['default.005']} skeleton={nodes.Guy1a002.skeleton} />
          </group>
        </group>
    </group>
  )
}

useGLTF.preload(ITEM_URI) // load this one in as it is hidden initially
