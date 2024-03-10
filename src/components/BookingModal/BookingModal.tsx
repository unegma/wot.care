import {Button, createStyles, makeStyles, Modal, Theme, Typography, Box, scopedCssBaselineClasses} from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {Link} from "react-router-dom";
import './BookingModal.scss'
import {XRButton} from "@react-three/xr";



export default function BookingModal ({ showBookingModal, setShowBookingModal, personality, setPersonality }: any) {

  const [page, setPage] = React.useState(1);

  const handleClose = () => {
    setShowBookingModal(false);
  };

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    maxWidth: '90vw',
    minWidth: '85vw',
    maxHeight: '90vh',
    // minHeight: '85vh',
    overflow: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      hideBackdrop
      className="info-modal"
      open={showBookingModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box component="div" sx={modalStyle}>
        {/*<HighlightOffIcon className="closeModalButton" onClick={() => { setShowBookingModal(false)}}/>*/}


        { page === 1 && (
          <>
            <Typography variant="h3" className="secondaryColor">Intro</Typography>
            <p>Remember to turn on your speakers, conversation will begin after all options selected (except on iOS)!</p>
            <br/>
            <Button style={{marginRight:"10px"}} variant="contained" onClick={() => {setPersonality('moody'); setPage(2)}}>Ok</Button>
            {/*<Button variant="contained"  onClick={() => {setPersonality('friendly'); setPage(2)}}>Friendly</Button>*/}
          </>
        )}

        { page === 2 && (
          <>
            <Typography variant="h3" className="secondaryColor">Choose View</Typography>
            <p>If you are on an Android device, you can use this application in Augmented Reality:</p>
            <small><b>1.</b> In AR, move your device until the scene seems to 'unstick' from the ground.<br/><b>2</b>. After this, you can move the scene by 'aiming' your device.<br/><b>3.</b> Finally click to place.</small>

            <br/>
            <br/>

            <Button style={{marginRight:"10px"}} variant="contained" onClick={() => {setShowBookingModal(false)}}>Browser</Button>

            <XRButton
              onClick={() => setShowBookingModal(false)}
              className='xr-button'
              /* The type of `XRSession` to create */
              mode={'AR'}
              /**
               * `XRSession` configuration options
               * @see https://immersive-web.github.io/webxr/#feature-dependencies
               */
              sessionInit={{
                requiredFeatures: [
                  "local",
                  "hit-test"
                ],
                optionalFeatures: [
                  'local-floor',
                  'bounded-floor',
                  // 'hand-tracking',
                  // 'layers',
                  "dom-overlay",
                  // "dom-overlay-for-handheld-ar"
                ],
                domOverlay: { root: document.body },
                // domOverlay: { root: document.body.querySelector(".xrOverlay")! },
              }}
              /** Whether this button should only enter an `XRSession`. Default is `false` */
              enterOnly={false}
              /** Whether this button should only exit an `XRSession`. Default is `false` */
              exitOnly={false}
            >
              {/* Can accept regular DOM children and has an optional callback with the XR button status (unsupported, exited, entered) */}
              AR View
            </XRButton>

          </>
        )}

        <br/>
        <br/>

        {/*<Typography className="secondaryColor">*/}
        {/*  <a target="_blank" href="#">Booking Form</a><br/>*/}
        {/*</Typography>*/}
      </Box>
    </Modal>
  )
}
