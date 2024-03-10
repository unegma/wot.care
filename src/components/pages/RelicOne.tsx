// import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import {Environment, Html, Loader, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense, useEffect, useState} from "react";
import { Sky } from "@react-three/drei";
import {Controllers, Hands, RayGrab, useXR, XR, XRButton, XREvent, XRManagerEvent} from "@react-three/xr";
import WrappedSky from "../layout/WrappedSky";
import useSceneInteractions from "../../hooks/useSceneInteractions";
import ARPanel from "../layout/ARPanel";
import { useLocation } from 'react-router-dom'
// @ts-ignore
import {EcctrlJoystick} from "ecctrl";
import ScaleSlider from "../layout/ScaleSlider";
const initialHelperText = '⚲ or ↺ Model';


export default function RelicOne({showBookingModal, speaking, setSpeaking, sliderOn, zPos,setZPos,yPos,setYPos,setOverrideNativeEvent, furnitureItem, setFurnitureItem, relic, cameraPosition, minDistance, maxDistance, rotationLock, minPolarAngle = 1.5, maxPolarAngle = 1.5, movable, setMovable, scene, personality}: any) {
  const {
    masterScale, setMasterScale, consoleMessage, setConsoleMessage, playerPosition, setPlayerPosition, setPresenting
  } = useSceneInteractions();
  const location = useLocation();

  const [helperText, setHelperText] = useState(initialHelperText);

  const showHelperTextMessage = () => {
    let helperTextAlertMessage = 'Model can be rotated or zoomed: \n' +
      'Controls vary depending on your device.\n' +
      'Zoom is usually pinch or scroll with 2 fingers.'

    alert(helperTextAlertMessage);
  };

  return (
    <>
      <div className={`buttons-container buttons-container--left-helper`}>
        <p className='helperText' onClick={() => {showHelperTextMessage()}}>{helperText}</p>
      </div>

      <ARPanel showBookingModal={showBookingModal}
        speaking={speaking} setSpeaking={setSpeaking} personality={personality}
        scene={scene} movable={movable} setMovable={setMovable} furnitureItem={furnitureItem}
        setFurnitureItem={setFurnitureItem} setOverrideNativeEvent={setOverrideNativeEvent}
      />

      {((location.pathname === '/enderman') || (location.pathname === '/audi' || (location.pathname === '/enderman-game'))) && (
        <EcctrlJoystick
          // disableFollowCam
          joystickBaseProps={{
            receiveShadow: true,
            // material: new THREE.MeshStandardMaterial({ color: "grey" })
          }}
        />
      )}


      {((location.pathname === '/st-pauls')) && (
        <ScaleSlider />
      )}

      <Loader/>

      <Canvas linear className="the-canvas">

        <XR
          onSessionStart={(event: XREvent<XRManagerEvent>) => {setPresenting(true)}}
          onSessionEnd={(event: XREvent<XRManagerEvent>) => {window.location.reload()}}
        >
          {/*<Html className="instructions-html">Click AR Button Below (on Android) to enter AR.<br/><br/>Step back to see Objects AR mode.<br/><br/>Click Objects to Interact</Html>*/}

          {/*<Controllers />*/}
          {/*<Hands />*/}



          {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
          {/*<OrbitControls enableZoom={true} enablePan={false} minZoom={Math.PI/2} maxZoom={Math.PI/3} />*/}

          {/*{ !rotationLock && (*/}
          {/*  <OrbitControls enableZoom={true} enablePan={true} minDistance={minDistance} maxDistance={maxDistance} />*/}
          {/*)}*/}

          {/*{ rotationLock && (*/}
          {/*  <OrbitControls enableZoom={true} enablePan={true} minDistance={minDistance} maxDistance={maxDistance} minPolarAngle={minPolarAngle} maxPolarAngle={maxPolarAngle} />*/}
          {/*)}*/}
          <OrbitControls />

          {/*todo don't seem to be needed*/}
          {/*<WrappedSky />*/}
          {/*<Environment files="https://assets.unegma.net/shared/threejs-environments/city.hdr"/>*/}
          <PerspectiveCamera makeDefault position={[5,2,3]}  />

          <Suspense fallback={<Html></Html>}>
            <RayGrab>
              {relic}
            </RayGrab>
          </Suspense>

        </XR>
      </Canvas>
    </>
  )
}
