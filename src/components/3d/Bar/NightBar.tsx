import React, {useEffect, useState, Suspense, Fragment, useRef} from 'react';
import * as THREE from 'three'
import {
  Interactive,
  useHitTest,
  ARButton,
  XR,
  XRButton,
  Controllers,
  Hands,
  useXREvent,
  XRControllerEvent, XREvent, useXR
} from '@react-three/xr'
import { Shape, ExtrudeGeometry, MeshStandardMaterial, Vector2, Vector3 } from 'three';

import {Box, Environment, Html, Text, useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import {useFrame, useThree} from "@react-three/fiber";



// args is a box which ends up inside the candle
export default function NightBar({ scale = 1, position = [0,0,0], args = [0.5, 0.5, 0.5], xrScaleOffset = 0.5, xrPositionOffset = [0,-5,-5], setDebug }: any) {

  const ref = useRef<THREE.Group>(null!)



  // TODO scale is determined by how close to the ground you are??
  // todo need to do some thinking around the scene being centred around the user's feet and how rotations are working
  return (
    <>
      {/*position [0,0,-1 here is for the offset so in front of the user's feet, first number is left and right (- being left), last number is forward and back (- being in front)*/}
      <group ref={ref} position={[0,0,0]}>

        {/*rotation in a separate group, otherwise it rotates the whole scene*/}
        {/* rotation, if 2.65 means the model is looking to the right when in line with the player, then 2.45 will rotate left towards the player*/}
        {/*<group rotation={[0,Math.PI/2,0]} scale={300}>*/}


        {/*</group>*/}
      </group>
    </>
  )
  // }
}

// todo we do want to preload, but only when at this specific url
// TODO CHECK IF THIS IS ALSO PRELOADING WHEN THE WHOLE SITE LOADS OR JUST WHEN THE PAGE LOADS
// useGLTF.preload(ITEM_URI)
