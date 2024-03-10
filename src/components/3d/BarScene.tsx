import React, {useEffect, useState, Suspense, Fragment, useRef} from 'react';
import * as THREE from 'three'
import {
  useHitTest,
  useXREvent,
  XRControllerEvent, XREvent, useXR
} from '@react-three/xr'
import { Shape, ExtrudeGeometry, MeshStandardMaterial, Vector2, Vector3 } from 'three';

import {Box, Environment, Html, Text, useGLTF, useAnimations} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import {useFrame, useThree} from "@react-three/fiber";
import {TomIdle} from "./Bar/TomIdle";
import {TomTalking} from "./Bar/TomTalking";



// args is a box which ends up inside the candle
export default function BarScene({ scale = 1, position = [0,0,0], args = [0.5, 0.5, 0.5], xrScaleOffset = 0.5, xrPositionOffset = [0,-5,-5], setDebug, setPlayerPosition, setConsoleMessage, playerPosition, speaking, setSpeaking, personality }: any) {

  const reffy = useRef<THREE.Group>(null!)

  const [finalPlacement, setFinalPlacement] = useState<any>(null!);

  const {
    player, referenceSpace
  } = useXR(); // TODO SOMETIMES ISPRESENTING DOESNT SEEMTO BE SET TO TRUE WHEN IN AR MODE

  useFrame(() => {
    if (player.children[0].position.x !== 0 && player.children[0].position.y !== 0 && player.children[0].position.z !== 0) {
      setConsoleMessage(`Player is at: ${player.children[0].position.x}, ${player.children[0].position.y}, ${player.children[0].position.z}`);
      setPlayerPosition({x: player.children[0].position.x, y: player.children[0].position.y, z: player.children[0].position.z});
    }
  })


  const [movable, setMovable] = useState(true)

  useXREvent('select', () => {
    // setActive(!active)
    setMovable(false)
  })

  useHitTest((hit: any) => {
    if (movable) {
      // console.log('hit is: ', reffy.current.position);
      hit.decompose(reffy.current.position, reffy.current.rotation, reffy.current.scale)
      setFinalPlacement(reffy.current.position);
    }
  })

  return (
    <>

      <group ref={reffy}>
        <ambientLight intensity={5} />

        {/* Point lights at various positions around the model */}
        <pointLight position={[10, 10, 10]} intensity={1} color="white" />
        <pointLight position={[-10, 10, 10]} intensity={1} color="white" />
        <pointLight position={[10, -10, 10]} intensity={1} color="white" />
        <pointLight position={[-10, -10, 10]} intensity={1} color="white" />
        <pointLight position={[10, 10, -10]} intensity={1} color="white" />
        <pointLight position={[-10, 10, -10]} intensity={1} color="white" />
        <pointLight position={[10, -10, -10]} intensity={1} color="white" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="white" />



        <mesh position={[0, 0, 0]} visible={movable} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial color="yellow" />
        </mesh>

        { !speaking && (
          <TomIdle scale={0.3} rotation={[0,1,0]} position={[0,0,0]} playerPosition={playerPosition} />
        )}
        { speaking && (
          <TomTalking scale={0.3} rotation={[0,1,0]} position={[0,0,0]} playerPosition={playerPosition} speaking={speaking} setSpeaking={setSpeaking} />
        )}
      </group>
    </>
  )
}


