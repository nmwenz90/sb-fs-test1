export default function Slider({min, max, value}) {
    

    return (
        <>
            <input type="range" min={min} max={max} value={value} className="slider"/> 
        </>
    )
}
