import { useState } from 'react';
import './App.css'

function App() {
  const [rating, setRating] = useState(0);

  const handleColorChange = (rating) => {
    setRating(rating);
  } 

  return (
    <div>
      <h2>Rating </h2>
      <div className='starContainer' style={{cursor:"pointer"}}>
        <span className="stars" style={{color : (rating<1) ? 'black'  : 'orange'}} onClick={()=>handleColorChange(1)}>*</span>
        <span className="stars" style={{color : (rating<2) ? 'black'  : 'orange'}} onClick={()=>handleColorChange(2)}>*</span>
        <span className="stars" style={{color : (rating<3) ? 'black'  : 'orange'}} onClick={()=>handleColorChange(3)}>*</span>
        <span className="stars" style={{color : (rating<4) ? 'black'  : 'orange'}} onClick={()=>handleColorChange(4)}>*</span>
        <span className="stars" style={{color : (rating<5) ? 'black'  : 'orange'}} onClick={()=>handleColorChange(5)}>*</span>
      </div>
      <br />
      <div>You've Rated it : {rating} *</div>
    </div>
  );
}
export default App;
