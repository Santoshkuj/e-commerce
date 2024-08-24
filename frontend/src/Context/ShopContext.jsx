import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [newCollection, setNewCollection] = useState([]);
  const [popular, setPopular] = useState([]);
  const [token, setToken] = useState('');

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = allProducts.find((e) => e.id === Number(item));
        totalAmount += iteminfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    (async function () {
      try {
        const [res, coll,pop] = await Promise.all([
          axios.get("http://localhost:5004/api/product/allproducts"),
          axios.get("http://localhost:5004/api/product/newcollection"),
          axios.get("http://localhost:5004/api/product/popular"),
        ]);
        const auth = localStorage.getItem('auth-token')
        if (auth) {
            setToken(auth)
            const cartData =await axios.post('http://localhost:5004/api/user/cartdata',{},{headers:{token}})
            if (cartData.data.success) {
                setCartItems(cartData.data.cart)
            }
        } else{
            setCartItems({})
        }

        if (res.data.success && coll.data.success && pop.data.success){
          setAllProducts(res.data.products);
          setNewCollection(coll.data.newcollection);
          setPopular(pop.data.popular);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [token]);

  const addToCart = async(itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
    if (token) {
        await axios.post('http://localhost:5004/api/user/addtocart',{itemId},{headers:{token}})
    }
  };
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    if (token) {
        await axios.post('http://localhost:5004/api/user/remove',{itemId},{headers:{token}})
    }
  };
 
  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    allProducts,
    newCollection,
    popular,
    token,
    setToken,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
