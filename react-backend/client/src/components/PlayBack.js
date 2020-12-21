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
    const player = useRef(null) //perists state of audio in React
    const volValue = scale(sliderValue, 0, 100, -24, 0) // remaps the slider value to the volume value

    // streaming example wav for now through cdn
    useEffect(() => {
        player.current = new Tone.Player('https://res.cloudinary.com/dvwvkt7iq/video/upload/v1608428616/example_sjy4ui.wav').toDestination(); 
    }, [player]);


    const playStopAudio = (e) => {
        e.preventDefault()
        if (pressed === false) {
            player.current.volume.value = volValue;
            player.current.start();
            setPressed(true);  
            Tone.Transport.start()
            
            //Schedule to stop playback when time reaches the end
            Tone.Transport.schedule(() => {
                player.current.stop()
                setPressed(false)
                Tone.Transport.stop()
            }, player.current.buffer.duration )
        }

        else{
            player.current.stop()
            setPressed(false)
            Tone.Transport.stop()
        }
    }

    const restartAudio = (e) => {
        e.preventDefault()
        player.current.stop()
        setPressed(false)
    }

    const handleVolumeChange = (e) => {
        setSliderValue(e.target.value);
        player.current.volume.value = volValue;
        if(sliderValue <= 5) player.current.mute = true;
        else player.current.mute = false;
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
