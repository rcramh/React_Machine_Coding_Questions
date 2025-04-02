import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [suggestionData, setSuggestionData] = useState(null);
  const [input, setInput] = useState('');
  const [cache, setCache] = useState([])

  const fetchData = async () => {
    const result = await fetch('https://www.google.co.in/complete/search?client=firefox&q='+input);
    const data = await result.json();
    setSuggestionData(data[1]);
  }

  //It'll handle debouncing logic effectively
  useEffect(()=>{
    let timerId = setTimeout(()=>{
      fetchData();
    },3000)

    return ()=>{
      clearTimeout(timerId);
    }
  },[input])

  return (
    <>
    <h4>
      Auto Complete Search Bar
    </h4>

    <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)} className='input_box' />
      <button>search</button>
    </div>
    <div className='suggestion_container'>
      {input && suggestionData && suggestionData.map((item,index)=>(
          <div key={index} className='one_suggestion'>{item}</div>
      ))
      }
    </div>
    </>
  )
}

export default App
