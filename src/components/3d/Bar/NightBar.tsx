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
// const ITEM_URI = `${process.env.REACT_APP_ASSETS_URL}/dystopian-skyscraper-reduced-transformed.glb`;
const ITEM_URI = `${process.env.REACT_APP_ASSETS_URL}/stripped-bar.glb`;
// const ITEM2_URI = `${process.env.REACT_APP_ASSETS_URL}/tut.glb`;


type GLTFResult = GLTF & {
  nodes: {
    Bar_Menu_Bar_Board_Txt_0: THREE.Mesh
    Bar_Menu_Prop_Dark_Wood_0: THREE.Mesh
    Cover1_Door_Txt_0: THREE.Mesh
    Cover2_Door_Txt_0: THREE.Mesh
    Cover3_Door_Txt_0: THREE.Mesh
    Cover4_Door_Txt_0: THREE.Mesh
    Stands_Long_Wood_0: THREE.Mesh
    Stands2_Door_Txt_0: THREE.Mesh
    Stands3_Door_Txt_0: THREE.Mesh
    Stands4_Door_Txt_0: THREE.Mesh
    Stands5_Door_Txt_0: THREE.Mesh
    Bottle_Baileys_Txt_0: THREE.Mesh
    Bottle_Cointreau_Txt_0: THREE.Mesh
    Bottle_Crema_di_Lim_Txt_0: THREE.Mesh
    Bottle_Jagermeister_Txt_0: THREE.Mesh
    Bottle_Jameson_Txt_0: THREE.Mesh
    Bottle1_Baileys_Txt_0: THREE.Mesh
    Bottle1_Cointreau_Txt_0: THREE.Mesh
    Bottle1_Crema_di_Lim_Txt_0: THREE.Mesh
    Bottle1_Jagermeister_Txt_0: THREE.Mesh
    Bottle1_Jameson_Txt_0: THREE.Mesh
    Bottle2_Baileys_Txt_0: THREE.Mesh
    Bottle2_Cointreau_Txt_0: THREE.Mesh
    Bottle2_Crema_di_Lim_Txt_0: THREE.Mesh
    Bottle2_Jagermeister_Txt_0: THREE.Mesh
    Bottle2_Jameson_Txt_0: THREE.Mesh
    Bottle3_Baileys_Txt_0: THREE.Mesh
    Bottle3_Cointreau_Txt_0: THREE.Mesh
    Bottle3_Crema_di_Lim_Txt_0: THREE.Mesh
    Bottle3_Jagermeister_Txt_0: THREE.Mesh
    Bottle3_Jameson_Txt_0: THREE.Mesh
    Bottle4_Baileys_Txt_0: THREE.Mesh
    Bottle4_Cointreau_Txt_0: THREE.Mesh
    Bottle4_Crema_di_Lim_Txt_0: THREE.Mesh
    Bottle4_Jagermeister_Txt_0: THREE.Mesh
    Bottle4_Jameson_Txt_0: THREE.Mesh
    Bottle5_Baileys_Txt_0: THREE.Mesh
    Bottle5_Cointreau_Txt_0: THREE.Mesh
    Bottle5_Jagermeister_Txt_0: THREE.Mesh
    Bottle5_Jameson_Txt_0: THREE.Mesh
    Bottle6_Baileys_Txt_0: THREE.Mesh
    Bottle6_Cointreau_Txt_0: THREE.Mesh
    Bottle6_Jagermeister_Txt_0: THREE.Mesh
    Bottle6_Jameson_Txt_0: THREE.Mesh
    Bottle7_Baileys_Txt_0: THREE.Mesh
    Bottle7_Cointreau_Txt_0: THREE.Mesh
    Bottle7_Jagermeister_Txt_0: THREE.Mesh
    Bottle7_Jameson_Txt_0: THREE.Mesh
    Bottle8_Baileys_Txt_0: THREE.Mesh
    Bottle8_Cointreau_Txt_0: THREE.Mesh
    Bottle8_Jagermeister_Txt_0: THREE.Mesh
    Bottle8_Jameson_Txt_0: THREE.Mesh
    Bottle9_Baileys_Txt_0: THREE.Mesh
    Bottle9_Cointreau_Txt_0: THREE.Mesh
    Bottle9_Jagermeister_Txt_0: THREE.Mesh
    Bottle9_Jameson_Txt_0: THREE.Mesh
    Cover10_Door_Txt_0: THREE.Mesh
    Cover5_Door_Txt_0: THREE.Mesh
    Cover6_Door_Txt_0: THREE.Mesh
    Cover7_Door_Txt_0: THREE.Mesh
    Cover8_Door_Txt_0: THREE.Mesh
    Cover9_Door_Txt_0: THREE.Mesh
    Top_Box_Door1_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door10_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door2_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door3_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door4_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door5_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door6_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door7_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door8_Prop_Dark_Wood_0: THREE.Mesh
    Top_Box_Door9_Prop_Dark_Wood_0: THREE.Mesh
    Handel_Wooden_Beam_Txt_0: THREE.Mesh
    Handel1_Wooden_Beam_Txt_0: THREE.Mesh
    Handel2_Wooden_Beam_Txt_0: THREE.Mesh
    Handel3_Wooden_Beam_Txt_0: THREE.Mesh
    Handel4_Wooden_Beam_Txt_0: THREE.Mesh
    Handel5_Wooden_Beam_Txt_0: THREE.Mesh
    Handel6_Wooden_Beam_Txt_0: THREE.Mesh
    Handel7_Wooden_Beam_Txt_0: THREE.Mesh
    Handel8_Wooden_Beam_Txt_0: THREE.Mesh
    Handel9_Wooden_Beam_Txt_0: THREE.Mesh
    Stand_Long_Wood_0: THREE.Mesh
    Stand1_Long_Wood_0: THREE.Mesh
    Counter_Ply_Wood_0: THREE.Mesh
    Counter_Box11_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box12_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box13_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box14_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box15_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box16_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box17_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box18_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box3_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box6_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box7_Prop_Dark_Wood_0: THREE.Mesh
    Counter_Box8_Prop_Dark_Wood_0: THREE.Mesh
    Beer_Mug2_Glass_Txt_0: THREE.Mesh
    Beer_Mug3_Glass_Txt_0: THREE.Mesh
    Beer_Mug5_Glass_Txt_0: THREE.Mesh
    Glass_Glass_Txt_0: THREE.Mesh
    Glass1_Glass_Txt_0: THREE.Mesh
    Glass2_Glass_Txt_0: THREE.Mesh
    Ice_Box_Glass_Txt_0: THREE.Mesh
    Ice_Box1_Glass_Txt_0: THREE.Mesh
    Ice_Box2_Glass_Txt_0: THREE.Mesh
    Ice_Box5_Glass_Txt_0: THREE.Mesh
    Ice_Box6_Glass_Txt_0: THREE.Mesh
    Mug_Glass_Txt_0: THREE.Mesh
    Mug1_Glass_Txt_0: THREE.Mesh
    Mug2_Glass_Txt_0: THREE.Mesh
    Mug3_Glass_Txt_0: THREE.Mesh
    Mug4_Glass_Txt_0: THREE.Mesh
    Mug5_Glass_Txt_0: THREE.Mesh
    Shot_Cup_Glass_Txt_0: THREE.Mesh
    Shot_Cup3_Glass_Txt_0: THREE.Mesh
    Shot_Cup5_Glass_Txt_0: THREE.Mesh
    Shot_Cup7_Glass_Txt_0: THREE.Mesh
    Shot_Cup8_Glass_Txt_0: THREE.Mesh
    Wine_Cup_Glass_Txt_0: THREE.Mesh
    Wine_Cup10_Glass_Txt_0: THREE.Mesh
    Wine_Cup11_Glass_Txt_0: THREE.Mesh
    Wine_Cup12_Glass_Txt_0: THREE.Mesh
    Wine_Cup13_Glass_Txt_0: THREE.Mesh
    Wine_Cup14_Glass_Txt_0: THREE.Mesh
    Wine_Cup15_Glass_Txt_0: THREE.Mesh
    Wine_Cup16_Glass_Txt_0: THREE.Mesh
    Wine_Cup2_Glass_Txt_0: THREE.Mesh
    Wine_Cup3_Glass_Txt_0: THREE.Mesh
    Wine_Cup4_Glass_Txt_0: THREE.Mesh
    Wine_Cup7_Glass_Txt_0: THREE.Mesh
    Chair_Top_Chair_Wood_Txt_0: THREE.Mesh
    Cusion_Cusion_Txt_0: THREE.Mesh
    Holder_Chair_Wood_Txt_0: THREE.Mesh
    Holder4_Chair_Wood_Txt_0: THREE.Mesh
    Holder5_Chair_Wood_Txt_0: THREE.Mesh
    Holder6_Chair_Wood_Txt_0: THREE.Mesh
    Leg_Chair_Wood_Txt_0: THREE.Mesh
    Chair_Top_Chair_Wood_Txt_0001: THREE.Mesh
    Cusion_Cusion_Txt_0001: THREE.Mesh
    Holder_Chair_Wood_Txt_0001: THREE.Mesh
    Holder4_Chair_Wood_Txt_0001: THREE.Mesh
    Holder5_Chair_Wood_Txt_0001: THREE.Mesh
    Holder6_Chair_Wood_Txt_0001: THREE.Mesh
    Leg_Chair_Wood_Txt_0001: THREE.Mesh
    Chair_Top_Chair_Wood_Txt_0002: THREE.Mesh
    Cusion_Cusion_Txt_0002: THREE.Mesh
    Holder_Chair_Wood_Txt_0002: THREE.Mesh
    Holder4_Chair_Wood_Txt_0002: THREE.Mesh
    Holder5_Chair_Wood_Txt_0002: THREE.Mesh
    Holder6_Chair_Wood_Txt_0002: THREE.Mesh
    Leg_Chair_Wood_Txt_0002: THREE.Mesh
    Chair_Top_Chair_Wood_Txt_0003: THREE.Mesh
    Cusion_Cusion_Txt_0003: THREE.Mesh
    Holder_Chair_Wood_Txt_0003: THREE.Mesh
    Holder4_Chair_Wood_Txt_0003: THREE.Mesh
    Holder5_Chair_Wood_Txt_0003: THREE.Mesh
    Holder6_Chair_Wood_Txt_0003: THREE.Mesh
    Leg_Chair_Wood_Txt_0003: THREE.Mesh
    Chair_Top_Chair_Wood_Txt_0004: THREE.Mesh
    Cusion_Cusion_Txt_0004: THREE.Mesh
    Holder_Chair_Wood_Txt_0004: THREE.Mesh
    Holder4_Chair_Wood_Txt_0004: THREE.Mesh
    Holder5_Chair_Wood_Txt_0004: THREE.Mesh
    Holder6_Chair_Wood_Txt_0004: THREE.Mesh
    Leg_Chair_Wood_Txt_0004: THREE.Mesh
    Chair_Top_Chair_Wood_Txt_0005: THREE.Mesh
    Cusion_Cusion_Txt_0005: THREE.Mesh
    Holder_Chair_Wood_Txt_0005: THREE.Mesh
    Holder4_Chair_Wood_Txt_0005: THREE.Mesh
    Holder5_Chair_Wood_Txt_0005: THREE.Mesh
    Holder6_Chair_Wood_Txt_0005: THREE.Mesh
    Leg_Chair_Wood_Txt_0005: THREE.Mesh
  }
  materials: {
    Bar_Board_Txt: THREE.MeshStandardMaterial
    Prop_Dark_Wood: THREE.MeshStandardMaterial
    Door_Txt: THREE.MeshStandardMaterial
    Long_Wood: THREE.MeshStandardMaterial
    Baileys_Txt: THREE.MeshStandardMaterial
    Cointreau_Txt: THREE.MeshStandardMaterial
    Crema_di_Lim_Txt: THREE.MeshStandardMaterial
    Jagermeister_Txt: THREE.MeshStandardMaterial
    Jameson_Txt: THREE.MeshStandardMaterial
    Wooden_Beam_Txt: THREE.MeshStandardMaterial
    Ply_Wood: THREE.MeshStandardMaterial
    Glass_Txt: THREE.MeshPhysicalMaterial
    Chair_Wood_Txt: THREE.MeshStandardMaterial
    Cusion_Txt: THREE.MeshStandardMaterial
  }
}


// args is a box which ends up inside the candle
export default function NightBar({ scale = 1, position = [0,0,0], args = [0.5, 0.5, 0.5], xrScaleOffset = 0.5, xrPositionOffset = [0,-5,-5], setDebug }: any) {

  const ref = useRef<THREE.Group>(null!)

  const { nodes: nodes, materials: materials } = useGLTF(ITEM_URI, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult


  // TODO scale is determined by how close to the ground you are??
  // todo need to do some thinking around the scene being centred around the user's feet and how rotations are working
  return (
    <>
      {/*position [0,0,-1 here is for the offset so in front of the user's feet, first number is left and right (- being left), last number is forward and back (- being in front)*/}
      <group ref={ref} position={[0,0,0]}>

        {/*rotation in a separate group, otherwise it rotates the whole scene*/}
        {/* rotation, if 2.65 means the model is looking to the right when in line with the player, then 2.45 will rotate left towards the player*/}
        {/*<group rotation={[0,Math.PI/2,0]} scale={300}>*/}


        <group scale={scale}>

          <group scale={0.008}>
            <group position={[353.514, 0, 15.412]}>
              <group position={[0, 0, -8.756]}>
                <mesh castShadow receiveShadow geometry={nodes.Cover10_Door_Txt_0.geometry} material={materials.Door_Txt} />
                <mesh castShadow receiveShadow geometry={nodes.Cover5_Door_Txt_0.geometry} material={materials.Door_Txt} />
                <mesh castShadow receiveShadow geometry={nodes.Cover6_Door_Txt_0.geometry} material={materials.Door_Txt} />
                <mesh castShadow receiveShadow geometry={nodes.Cover7_Door_Txt_0.geometry} material={materials.Door_Txt} />
                <mesh castShadow receiveShadow geometry={nodes.Cover8_Door_Txt_0.geometry} material={materials.Door_Txt} />
                <mesh castShadow receiveShadow geometry={nodes.Cover9_Door_Txt_0.geometry} material={materials.Door_Txt} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door1_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door10_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door2_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door3_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door4_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door5_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door6_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door7_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door8_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
                <mesh castShadow receiveShadow geometry={nodes.Top_Box_Door9_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} />
              </group>
              <mesh castShadow receiveShadow geometry={nodes.Handel_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel1_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel2_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel3_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel4_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel5_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel6_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel7_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel8_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Handel9_Wooden_Beam_Txt_0.geometry} material={materials.Wooden_Beam_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Stand_Long_Wood_0.geometry} material={materials.Long_Wood} />
              <mesh castShadow receiveShadow geometry={nodes.Stand1_Long_Wood_0.geometry} material={materials.Long_Wood} />
            </group>
            <mesh castShadow receiveShadow geometry={nodes.Bar_Menu_Bar_Board_Txt_0.geometry} material={materials.Bar_Board_Txt} position={[-144.123, 207.05, 2.125]} />
            <mesh castShadow receiveShadow geometry={nodes.Bar_Menu_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[-143.129, 207.05, 2.125]} />
            <mesh castShadow receiveShadow geometry={nodes.Cover1_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Cover2_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Cover3_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Cover4_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Stands_Long_Wood_0.geometry} material={materials.Long_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Stands2_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Stands3_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Stands4_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Stands5_Door_Txt_0.geometry} material={materials.Door_Txt} position={[353.514, 0, 15.412]} />
            <group scale={110}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle_Crema_di_Lim_Txt_0.geometry} material={materials.Crema_di_Lim_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
            </group>
            <group scale={110}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle1_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle1_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle1_Crema_di_Lim_Txt_0.geometry} material={materials.Crema_di_Lim_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle1_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle1_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
            </group>
            <group scale={110}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle2_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle2_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle2_Crema_di_Lim_Txt_0.geometry} material={materials.Crema_di_Lim_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle2_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle2_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
            </group>
            <group scale={110}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle3_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle3_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle3_Crema_di_Lim_Txt_0.geometry} material={materials.Crema_di_Lim_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle3_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle3_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
            </group>
            <group scale={110}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle4_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle4_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle4_Crema_di_Lim_Txt_0.geometry} material={materials.Crema_di_Lim_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle4_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle4_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
            </group>
            <group scale={110}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle5_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle5_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle5_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle5_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} position={[3.214, 0, 0.14]} scale={0.009} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle6_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle6_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle6_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle6_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle7_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle7_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle7_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle7_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle8_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle8_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle8_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle8_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Bottle9_Baileys_Txt_0.geometry} material={materials.Baileys_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle9_Cointreau_Txt_0.geometry} material={materials.Cointreau_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle9_Jagermeister_Txt_0.geometry} material={materials.Jagermeister_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Bottle9_Jameson_Txt_0.geometry} material={materials.Jameson_Txt} />
            </group>
            <mesh castShadow receiveShadow geometry={nodes.Counter_Ply_Wood_0.geometry} material={materials.Ply_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box11_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box12_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box13_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box14_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box15_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box16_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box17_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box18_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box3_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box6_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box7_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Counter_Box8_Prop_Dark_Wood_0.geometry} material={materials.Prop_Dark_Wood} position={[353.514, 0, 15.412]} />
            <mesh castShadow receiveShadow geometry={nodes.Beer_Mug2_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Beer_Mug3_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Beer_Mug5_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Glass_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Glass1_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Glass2_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Ice_Box_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Ice_Box1_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Ice_Box2_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Ice_Box5_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Ice_Box6_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Mug_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Mug1_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Mug2_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Mug3_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Mug4_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Mug5_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Shot_Cup_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Shot_Cup3_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Shot_Cup5_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Shot_Cup7_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Shot_Cup8_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup10_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup11_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup12_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup13_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup14_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup15_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup16_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup2_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup3_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup4_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <mesh castShadow receiveShadow geometry={nodes.Wine_Cup7_Glass_Txt_0.geometry} material={materials.Glass_Txt} position={[327.896, 0, -418.287]} />
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Chair_Top_Chair_Wood_Txt_0.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Cusion_Cusion_Txt_0.geometry} material={materials.Cusion_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder_Chair_Wood_Txt_0.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder4_Chair_Wood_Txt_0.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder5_Chair_Wood_Txt_0.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder6_Chair_Wood_Txt_0.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Leg_Chair_Wood_Txt_0.geometry} material={materials.Chair_Wood_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Chair_Top_Chair_Wood_Txt_0001.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Cusion_Cusion_Txt_0001.geometry} material={materials.Cusion_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder_Chair_Wood_Txt_0001.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder4_Chair_Wood_Txt_0001.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder5_Chair_Wood_Txt_0001.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder6_Chair_Wood_Txt_0001.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Leg_Chair_Wood_Txt_0001.geometry} material={materials.Chair_Wood_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Chair_Top_Chair_Wood_Txt_0002.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Cusion_Cusion_Txt_0002.geometry} material={materials.Cusion_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder_Chair_Wood_Txt_0002.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder4_Chair_Wood_Txt_0002.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder5_Chair_Wood_Txt_0002.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder6_Chair_Wood_Txt_0002.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Leg_Chair_Wood_Txt_0002.geometry} material={materials.Chair_Wood_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Chair_Top_Chair_Wood_Txt_0003.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Cusion_Cusion_Txt_0003.geometry} material={materials.Cusion_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder_Chair_Wood_Txt_0003.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder4_Chair_Wood_Txt_0003.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder5_Chair_Wood_Txt_0003.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder6_Chair_Wood_Txt_0003.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Leg_Chair_Wood_Txt_0003.geometry} material={materials.Chair_Wood_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Chair_Top_Chair_Wood_Txt_0004.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Cusion_Cusion_Txt_0004.geometry} material={materials.Cusion_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder_Chair_Wood_Txt_0004.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder4_Chair_Wood_Txt_0004.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder5_Chair_Wood_Txt_0004.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder6_Chair_Wood_Txt_0004.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Leg_Chair_Wood_Txt_0004.geometry} material={materials.Chair_Wood_Txt} />
            </group>
            <group position={[353.514, 0, 15.412]}>
              <mesh castShadow receiveShadow geometry={nodes.Chair_Top_Chair_Wood_Txt_0005.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Cusion_Cusion_Txt_0005.geometry} material={materials.Cusion_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder_Chair_Wood_Txt_0005.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder4_Chair_Wood_Txt_0005.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder5_Chair_Wood_Txt_0005.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Holder6_Chair_Wood_Txt_0005.geometry} material={materials.Chair_Wood_Txt} />
              <mesh castShadow receiveShadow geometry={nodes.Leg_Chair_Wood_Txt_0005.geometry} material={materials.Chair_Wood_Txt} />
            </group>
          </group>

        </group>

        {/*</group>*/}
      </group>
    </>
  )
  // }
}

// todo we do want to preload, but only when at this specific url
// TODO CHECK IF THIS IS ALSO PRELOADING WHEN THE WHOLE SITE LOADS OR JUST WHEN THE PAGE LOADS
// useGLTF.preload(ITEM_URI)
