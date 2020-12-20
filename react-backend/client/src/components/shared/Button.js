export default function Button({value, name, onClick, children}) {
    
    return (
        <>
          <button onClick={onClick} className="buttons" value={value} name={name}>{children}</button>  
        </>
    )
}
