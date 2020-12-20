import Button from './shared/Button.js'
import Slider from './shared/Slider.js'
import { 
    IoPlayCircleOutline, 
    IoStopCircleOutline, 
    IoPlaySkipForwardCircleOutline, 
    IoPlaySkipBackCircleOutline, 
    IoVolumeHigh,
    IoVolumeOffOutline 
} from "react-icons/io5";

import { useState } from 'react'

export default function Playback() {
    const [pressed, setPressed] = useState(true)
    const handleclick = (e) => {
        e.preventDefault()
        console.log('clicked')
        // e.target.value = 'stop'
        setPressed(!pressed)
        console.log('pressed')
    }
    const checkPressed = pressed === true ? <IoPlayCircleOutline/> : <IoStopCircleOutline/> 
    return (
        <>
            <div className="playbackButtons">
                <Button id="prev" value="prev" name="prevButton" ><IoPlaySkipBackCircleOutline/></Button>
                <Button onClick={handleclick}className="play"value="play" name="playButton" >{
                    checkPressed
                    }</Button>
                <Button id="next" value="next"  name="nextButton" ><IoPlaySkipForwardCircleOutline/></Button>
            </div>
            <div>
                <IoVolumeOffOutline/><Slider min="0" max="100"/><IoVolumeHigh/>
            </div>
        </>
    )
}
