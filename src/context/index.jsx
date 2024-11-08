//create the context
//provide the context 
//provide the state to the context
//wrap contexr in root compoents
//consume the context using use context

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}){

  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState ([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItem, setCartItems] = useState([]);

  async function fetchListOfProducts() {
    const apiResponse = await fetch('https://dummyjson.com/products');
    const result = await apiResponse.json();
    

    if(result && result?.products){
      setListOfProducts(result?.products);
      setLoading(false);
    }
  }

  function handleAddToCart(getProductDetails){
    console.log(getProductDetails);

    let cpyExistingCartItem = [...cartItem];
    const findIndexOfCurrentItem = cpyExistingCartItem.findIndex(cartItem=> cartItem.id === getProductDetails.id);

    console.log(findIndexOfCurrentItem);

    if(findIndexOfCurrentItem === -1){
      cpyExistingCartItem.push({
        ...getProductDetails,
        quantity : 1,
        totalPrice : getProductDetails?.price
      })
    }
    else{

    }
    console.log(cpyExistingCartItem,"cpyExistingCartItem");
    setCartItems(cpyExistingCartItem);
    localStorage.setItem('cartItem', JSON.stringify(cpyExistingCartItem));
  }

  useEffect(() =>{
    fetchListOfProducts()
  },[]);

  console.log(cartItem);


  return <ShoppingCartContext.Provider value={{ listOfProducts,
  loading,
  setLoading,
  productDetails,
  setProductDetails,
  handleAddToCart,
  cartItem
  }}
  >
    {children}
  </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;