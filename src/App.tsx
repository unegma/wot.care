import React, {useEffect, useState} from 'react';
import {
  Route, Routes, useLocation
} from "react-router-dom";
import './App.scss';
import NavBar from "./components/layout/NavBar";
import {
  CameraAltOutlined,
  ChevronLeft,
  ChevronRight,
  InfoOutlined, LinearScale,
  Menu,
  ScreenshotMonitor, Straighten,
  ViewInAr
} from "@mui/icons-material";
import InfoModal from "./components/layout/InfoModal";
import LeftSideDrawer from "./components/layout/LeftSideDrawer";
import HomeScreen from "./components/pages/HomeScreen";
import DashboardScreen from "./components/pages/DashboardScreen";
import RelicOne from "./components/pages/RelicOne";
import RightSideDrawer from "./components/layout/RightSideDrawer";
import useSceneInteractions from "./hooks/useSceneInteractions";
import {SliderValueLabel} from "@mui/material";
import BarScene from "./components/3d/BarScene";
import BookingModal from "./components/BookingModal/BookingModal";

function App() {
  const [showImages, setShowImages] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(true);

  const [personality, setPersonality] = useState('moody');

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [drawerRightOpen, setDrawerRightOpen] = React.useState(false);
  const [infoOpen, setInfoOpen] = React.useState(false);
  const [sliderOn, setSliderOn] = React.useState(false);

  // TODO these aren't goint to get updated when route changes if the url is loaded directly
  const [infoTitle, setInfoTitle] = React.useState('The Title');
  const [infoText, setInfoText] = React.useState('The Description');


  const [zPos, setZPos] = React.useState(0);
  const [yPos, setYPos] = React.useState(0);

  const [speaking, setSpeaking] = useState(false);

  const location = useLocation();

  const [movable, setMovable] = React.useState(true); // todo move to scene interactions
  const [scene, setScene] = React.useState(''); // todo move to scene interactions
  const [furnitureItem, setFurnitureItem] = React.useState('chair'); // todo move to scene interactions
  const [japaneseFurnitureItem, setJapaneseFurnitureItem] = React.useState('bench'); // todo move to scene interactions
  const [survivalFurnitureItem, setSurvivalFurnitureItem] = React.useState('fire'); // todo move to scene interactions

  const [overrideNativeEvent,setOverrideNativeEvent] = React.useState(false); // this is to block the click on the screen when clicking the overlay

  const {
    masterScale, setMasterScale, // TODO IDEALLY WANT 0.15
    setConsoleMessage, setPlayerPosition, playerPosition, presenting, setPresenting
  } = useSceneInteractions();

  useEffect(() => {
    setTimeout(() => {
      if (location.pathname === '/') {
        setDrawerOpen(true);
      }
    }, 1000);
  }, [])


  const toggleLeftSideDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
      {
        return;
      }
      setDrawerOpen(!drawerOpen);
  };

  const toggleSlider = () => {
    setSliderOn(!sliderOn);
  };

  const toggleRightSideDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
      {
        return;
      }
    setDrawerRightOpen(!drawerRightOpen);
  };

  return (
    <div className="App">
      {/*<CssBaseline /> todo add this? */}

      {!presenting && (
        <NavBar toggleLeftSideDrawer={toggleLeftSideDrawer} showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />
      )}

      <InfoModal showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal} />
      <BookingModal personality={personality} setPersonality={setPersonality} showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />

      {/*<LeftSideDrawer*/}
      {/*  drawerOpen={drawerOpen}*/}
      {/*  toggleLeftSideDrawer={toggleLeftSideDrawer}*/}
      {/*  setShowImages={setShowImages}*/}
      {/*  setShowInfoModal={setShowInfoModal}*/}
      {/*  setInfoTitle={setInfoTitle}*/}
      {/*  setInfoText={setInfoText}*/}
      {/*/>*/}

      <RightSideDrawer
        infoOpen={infoOpen}
        toggleRightSideDrawer={toggleRightSideDrawer}
        // setShowImages={setShowImages}
        // setShowInfoModal={setShowInfoModal}
        // showInfoModal={showInfoModal}
        infoTitle={infoTitle}
        infoText={infoText}
        drawerRightOpen={drawerRightOpen}
        setDrawerRightOpen={setDrawerRightOpen}
      />

      <Routes>
        {/*<Route*/}
        {/*  key={'home'}*/}
        {/*  path="/"*/}
        {/*  element={*/}
        {/*    <HomeScreen toggleLeftSideDrawer={toggleLeftSideDrawer} />*/}
        {/*  }*/}
        {/*/>*/}

        <Route
          key={'home'}
          path="/"
          element={
            <RelicOne showBookingModal={showBookingModal} personality={personality} speaking={speaking} setSpeaking={setSpeaking} setOverrideNativeEvent={setOverrideNativeEvent} rotationLock={false} cameraPosition={[0,0,0]} minDistance={1} maxDistance={10} movable={movable} setMovable={setMovable}  relic={
              // todo CAMERA POSITION HERE MIGHT NEED TO BE [-10,10,-10] AS I CHANGED IT FROM THIS (camera position doesnt seem to do anything)
              <BarScene personality={personality} speaking={speaking} setSpeaking={setSpeaking} scale={masterScale} setConsoleMessage={setConsoleMessage} setPlayerPosition={setPlayerPosition} playerPosition={playerPosition} />}
            />
          }
        />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <div className="buttons-container">
        {/*<InfoOutlined className="pointer" style={{ color: "black", margin: "0 4px" }} />*/}
        <ScreenshotMonitor className="pointer" style={{ color: "black", margin: "0 4px" }} onClick={() => {setPresenting(!presenting)}} />

        <div className="pointer" onClick={(event) => {toggleRightSideDrawer(event)}}>

          {/*<InfoOutlined className="pointer" style={{ color: "black", margin: "0 4px" }} />*/}

          {/*{ drawerRightOpen && (*/}
          {/*  <ChevronRight style={{ color: "black", margin: "0 4px" }} />*/}
          {/*)}*/}
          {/*{ !drawerRightOpen && (*/}
          {/*  <ChevronLeft style={{ color: "black", margin: "0 4px" }} />*/}
          {/*)}*/}
        </div>
      </div>
    </div>
  );
}

export default App;
