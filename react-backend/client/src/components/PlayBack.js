import { useState, useRef, useEffect } from 'react'
import * as Tone from "tone";
import { 
    IoPlayCircleOutline, 
    IoStopCircleOutline, 
    IoPlaySkipForwardCircleOutline, 
    IoPlaySkipBackCircleOutline, 
    IoVolumeHigh,
    IoVolumeOffOutline 
} from "react-icons/io5"; // icons

import { scale } from '../utilities/utilities.js'

import Button from './shared/Button.js'
import Slider from './shared/Slider.js'

export default function Playback() {
    const [pressed, setPressed] = useState(false) // trigger for when play icon is clicked
    const [sliderValue, setSliderValue] = useState(50)
    const ref = useRef(null) //perists state of audio
    let volValue = scale(sliderValue, 0, 100, -24, 0) // remaps the slider value to the volume value

    // streaming example wav for now through cdn
    useEffect(() => {
        ref.current = new Tone.Player('https://res.cloudinary.com/dvwvkt7iq/video/upload/v1608428616/example_sjy4ui.wav').toDestination();
        
    }, [ref]);

    const playStopAudio = (e) => {
        e.preventDefault()
        if (pressed === false) {
            ref.current.volume.value = volValue
            ref.current.start()
            setPressed(true);  
        }
        else{
            ref.current.stop()
            setPressed(false)
        }
    }

    const restartAudio = (e) => {
        e.preventDefault()
        ref.current.stop()
        setPressed(false)

    }

    const handleVolumeChange = (e) => {
        setSliderValue(e.target.value);
        ref.current.volume.value = volValue;
        if(sliderValue <= 5) ref.current.mute = true;
        else ref.current.mute = false;
    }

    const checkPressed = pressed === false ? <IoPlayCircleOutline/> : <IoStopCircleOutline/> 

    return (
        <>
            <div className="playbackButtons">
                <Button id="prev" value="prev" name="prevButton" onClick={restartAudio}><IoPlaySkipBackCircleOutline/></Button>
                <Button className="play"value="play" name="playButton" onClick={playStopAudio}>{
                    checkPressed
                    }</Button>
                <Button id="next" value="next"  name="nextButton" onClick={restartAudio} ><IoPlaySkipForwardCircleOutline/></Button>
            </div>
            <div>
                <IoVolumeOffOutline/><Slider min="0" max="100" value={sliderValue} onChange={handleVolumeChange}/><IoVolumeHigh/>
            </div>
        </>
    )
}
