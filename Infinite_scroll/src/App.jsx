import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products?limit=15");
    const data = await response.json();
    setProduct(prev => [...prev, ...data]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <>
      <div className='all_card_container'>
        {product.map(item => (
          <div className='card_container' key={item.id}>
            <img src={item.image} alt='img' />
            <div className='item_title_container'>
              {item.title.slice(0, 15) + "..."}
            </div>
            <div className='price_container'>
              ${item.price}
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div>Loading more...</div>}
    </>
  );
}

export default App;
