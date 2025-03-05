import { useState, useEffect } from 'react'
import './App.css'

// put this component in separate components file
const PageComponent = ({perPageData}) => {
  return (
    <div className='all_card_container'>
        {
          perPageData.map((item)=>(
            <div key={item.id} className='product_container'>
              <div className='product_image_containter'>
                  <img src={item.thumbnail} alt='image-loading'></img>
              </div>
              <div className='title_container'>
                {item.title}
              </div>
            </div>
          ))
        }
      </div>
  )
}

const page_size = 5; // put it in separate constant file

function App() {
  const [productData, setProductData] = useState(null);
  let [pageNumber, setPageNumber] = useState(1);


  const fetchData = async () => {
    try{
      const data = await fetch('https://dummyjson.com/products');
      const parsedData = await data.json(); // i was messing here (json.parse(data) : wrong)
      setProductData(parsedData.products);
    }
    catch (err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  let totalNumberOfPage = productData ? Math.ceil(productData.length/page_size) : 0;
  let startingPageItem = (pageNumber-1)*page_size;
  let endingPageItem = startingPageItem + page_size;

  const newArray = new Array(totalNumberOfPage).fill(5);

  const handleNextClick = () => {
    setPageNumber(prev=>prev+1)
  }

  const handlePrevClick = () => {
    setPageNumber(prev=>prev-1)
  }

  const handlePageNumberButtonClick = (pageNumber) => {
    setPageNumber(pageNumber);
  }

  const perPageData = productData && productData.slice(startingPageItem,endingPageItem);
  
  return productData ? (
    <>
      Pagination component 😇
      <div className='pagination-button-container'>
        <button onClick={handlePrevClick} disabled={pageNumber <= 1}>prev</button>
        {newArray.map((_,index)=>(
          <button key={index} onClick={() => handlePageNumberButtonClick(index+1)}>{index+1}</button>
        ))}
        <button onClick={handleNextClick} disabled={pageNumber >= totalNumberOfPage}>next</button>
      </div>

      <PageComponent perPageData={perPageData}/>
    </>
  ) :
  (
    <>
      loading...
    </>
  )
}

export default App
