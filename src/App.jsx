import { useState } from "react"
import boxes from "./boxes"
import Box from "./compnents/Box"


function App(props) {
  const [squares , setSquares] = useState(boxes)

  function toggle(id){
    setSquares(prevSquare => {
      const newSquares = []
      for (let i = 0; i < prevSquare.length; i++) {
        const currentSquare = prevSquare[i];
        if(currentSquare.id === id){
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on
          }
          newSquares.push(updatedSquare)
        }else{
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    })
  }

  const squareElement = squares.map(square => {
    return(
      <Box 
      toggle={toggle} 
      key={square.id}
      on={square.on}
      id={square.id}
      />
    )
  })

  return(
    <div>
      {squareElement}
    </div>
  )
}

export default App
