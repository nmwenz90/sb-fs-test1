import { useEffect, useState } from 'react'
import MetadataList from './MetadataList'
import Playback from './PlayBack'

export default function Panel() {

    
    const [data, setData] = useState([])
    useEffect( () => {
        async function fetchData() {
            const results = await fetch('/audioData')
            const fetchedData = await results.json()
            setData(fetchedData)
        }
        fetchData()
    }, [])
    

    return (
        <div style={{
            position: 'relative',
            backgroundColor: '#333741',
            width: 400,
            height: 600,
            border: '2px solid white'
        }}>
        <MetadataList class="metadataList"
        source={data.source} 
        format={data.format} 
        size={data.size} 
        codec={data.codec} 
        channelCount={data.channelCount}
        duration={data.duration}
        />
        <Playback/>
        </div>
        
    )
}
