import { useState } from 'react'
import './App.css'

const accordianData = [
  {
    id : 1,
    title : "India",
    content : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    id : 2,
    title : "Japan",
    content : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
  {
    id : 3,
    title : "New Zealand",
    content : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  },
]

function App() {

const [data, setData] = useState(accordianData);
const [activeIndex, setActiveIndex] = useState(0);


 const handleAccordianItemClick = (index) => {
  if(index === activeIndex){
    setActiveIndex(-1);
  }
  else{
    setActiveIndex(index);
  }
 }


  return (
    <>
      <h2>Accordian component</h2>
      {
        data && data.map((item, index)=>(
          <div key={item.id} className='item_container'>
            <div className='title_container' onClick={()=>handleAccordianItemClick(index)}>
            <div>{item.title}</div>
            <div>⌄</div>
            </div>
            {
              (activeIndex === index) && 
              <div className='content_container'>
              {item.content}
              </div>
            }
          </div>
        ))
      }

    </>
  )
}

export default App
