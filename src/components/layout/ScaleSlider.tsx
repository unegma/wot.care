import {Slider} from "@mui/material";
import useSceneInteractions from "../../hooks/useSceneInteractions";
import {useEffect, useState} from "react";

// todo fix this so works based on current view
export default function ScaleSlider ({ }: any) {
  const { masterScale, setMasterScale } = useSceneInteractions();
  const [minScale, setMinZoom] = useState(0.001); // todo this needs to be the same as the value in StPauls
  const [maxScale, setMaxZoom] = useState(100);

  const handleChangeScale = (e: any) => {
    // const reversedValue = maxScale - e.target.value;
    const value = e.target.value;
console.log('the value', value)


    if (value == 0.001) { // hacky fix
      console.log('here1')
      setMasterScale(1);
    } else {
      console.log('here2')
      console.log(value)
      setMasterScale(value);
    }
  }

  return (
    <Slider
      min={minScale}
      max={maxScale}
      className={`zoom-slider my-third-step`}
      onChange={(e) => {handleChangeScale(e)}}
      aria-label="Scale"
      orientation="vertical"
      // getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      value={masterScale} // Make sure to reverse
    />
  )
}
