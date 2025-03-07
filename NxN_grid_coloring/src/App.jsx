import { useState } from 'react'
import GridPainter from './GridPainter';

//this is one of main challenging part while implementing
const createGrid = (n) => {
  let grid = [];
  for (let i = 0; i < n; i++) {
    let row = new Array(n).fill(null);
    grid.push(row);
  }
  return grid;
};


function Grid({selectedColor,n}){
  const [grid, setGrid] = useState(createGrid(n));

  const handleClick = (i,j) =>{
    let updatedGrid = grid.map((row)=>[...row]); // need to take care of deep copy here **
    updatedGrid[i][j] = selectedColor;
    setGrid(updatedGrid);
  }

  return(
    <div className='grid_container'>
      {grid.map((row,i)=>(
        <div key={i} className='grid_row_container'>
        {
          row.map((box,j)=>(
            <div key={j} style={{backgroundColor : `${box}`}}  className='grid_box_container' onClick={()=>handleClick(i,j)}>
              {box}
            </div>
          ))
        }
        </div>
      ))}
    </div>
  )
}

function App() {
  const [seletedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  }

  const colors = ['red', 'blue', 'orange', 'pink']

  return (
    <>
      <div className='main_container'>
        <Grid 
        selectedColor={seletedColor} 
        n={10}
        />
        <div className='color_palet_container'>
          {colors.map((color,i)=>(
            <div 
              key={color} 
              style={{backgroundColor : `${colors[i]}`}} 
              className='color_container' 
              onClick={()=>handleColorClick(color)}
            >
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
