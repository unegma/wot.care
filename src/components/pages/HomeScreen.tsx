import React from "react";
import Button from "@mui/material/Button";

export default function HomeScreen({toggleLeftSideDrawer}: {toggleLeftSideDrawer: any}) {

  return (
    <>
      <div className="home-screen-cover" onClick={(event:any) => {toggleLeftSideDrawer(event)}}>
        <div className="home-screen-button-container">
          <p className="home-screen-title">Examples of<br/>Augmented Reality</p>
          {/*<p className="home-screen-text">Click the Menu at the<br/>top left to get started.</p>*/}
        </div>
      </div>
      <div className="home-screen-image" style={{backgroundImage: `url(${process.env.REACT_APP_ASSETS_URL}/marissa-grootes-D4jRahaUaIc-unsplash.jpg)`}}/>
    </>
  )
}
