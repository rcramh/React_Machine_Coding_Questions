import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [percentage, setPercentage] = useState(20) // you can choose percentage here

  return (
    <>
      <h2>Progress Bar</h2>
      <div>{percentage} %</div>
      <div className="progress-bar"> 
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </>
  )
}

export default App
