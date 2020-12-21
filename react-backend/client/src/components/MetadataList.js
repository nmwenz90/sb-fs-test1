import { formatSizeUnits } from '../utilities/utilities.js'

export default function Metadatalist({source, format, size, codec, channelCount, duration}) {    
    return (
        <>{
            !source ? <ul className="metadataList">
            <li>loading...</li>
        </ul>:
            <ul className="metadataList">
                <li>Source: {source}</li>
                <li>Format: {format}</li>
                <li>Size: {formatSizeUnits(size)}</li>
                <li>Codec: {codec}</li>
                <li>Channel(s): {channelCount}</li>
                <li>Duration: {duration} Seconds</li>
            </ul>}
        </>
    )
}
