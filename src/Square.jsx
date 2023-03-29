
 const Square = ({value, onClick}) => {
    return (
      <div
        style={{border: "1px solid black", width: "10vw", height: "10vh", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5vw"}}
        onClick={onClick}
      >
        {value}
      </div>
    )
  }
  export default Square;