// Building a Traffic Light with React
// You are tasked with building a simple traffic light component using React. The traffic light  should consist of 
// three lights: red, yellow, and green. The lights should switch from green  to yellow to red after predetermined intervals 
// and loop indefinitely. Each light should be lit  for the following durations:
// Green light: 3000ms 
// Yellow light: 500ms 
// Red light: 4000ms 
// Your task is to implement a React component that represents the traffic light and switches between these colors based on the
//  specified intervals. Additionally, you should style the  traffic light to make it visually appealing.

import { useState, useEffect } from "react";
import "./App.css";

const trafficLight = [
  {
    id : 1,
    color : "Green",
    duration : 3000,
    nextColor : "Yellow",
    nextId : 2,
  },
  { 
    id : 2,
    color : "Yellow",
    duration : 500,
    nextColor : "Red",
    nextId : 3,
  },
  {
    id : 3,
    color : "Red",
    duration : 4000,
    nextColor : "Green",
    nextId : 1,
  }
]

const App = () => {

  const [currentLightIndex, setCurrentLightIndex] = useState(0);
  
  useEffect(()=>{
    let timerId = setTimeout(()=>{
      setCurrentLightIndex(trafficLight[currentLightIndex].nextId-1);
    },trafficLight[currentLightIndex].duration)

    return ()=>{
      clearTimeout(timerId);
    }
  },[currentLightIndex])


  return (
    <>
      <div> Traffic Light </div>
      <div className="light_div_container" style={{background: `${trafficLight[currentLightIndex].color}`}}>
      </div>
    </>
  )
}

export default App;
