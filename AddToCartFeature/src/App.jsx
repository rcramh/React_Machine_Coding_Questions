
import {useState} from "react"

 const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [newCartItemName, setNewCartItemsName] = useState("");
  const [newCartItemPrice, setNewCartItemsPrice] = useState("");

  const handleAddItemToCart = () => {
    setNewCartItemsName("")
    setNewCartItemsPrice("")
    const newCartItem = {
      name : newCartItemName,
      price : newCartItemPrice 
    }
    let cartAllItems = [...cartItems,newCartItem];
    setCartItems(cartAllItems);
  }

  return (
    <div>
      <h2>Add to cart : </h2>
      <input type="text" value={newCartItemName} placeholder="item name" onChange={(e)=>setNewCartItemsName(e.target.value)}/>
      <input type="text" value={newCartItemPrice} placeholder="item price" onChange={(e)=>setNewCartItemsPrice(e.target.value)}/>
      
      <button onClick={handleAddItemToCart}>Add</button>

      <h2>Cart items : </h2>
      <ul>
      {cartItems && cartItems.map((items,index)=>(
        <li key={index}>
          {items.name} : {items.price}
        </li>
      ))}
      </ul>

    </div>
  );
};

export default App;
