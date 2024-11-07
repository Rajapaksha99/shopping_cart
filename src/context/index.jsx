//create the context
//provide the context 
//provide the state to the context
//wrap contexr in root compoents
//consume the context using use context

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}){

  const [loading, setLoading] = useState(false);
  const [listOfProducts, setListOfProducts] = useState ([]);

  async function fetchListOfProducts() {
    const apiResponse = await fetch('https://dummyjson.com/products');
    const result = await apiResponse.json();
    

    if(result && result?.products){
      setListOfProducts(result?.products);
    }
  }

  useEffect(() =>{
    fetchListOfProducts()
  },[]);

  console.log(listOfProducts);


  return <ShoppingCartContext.Provider value={{ listOfProducts }}>
    {children}
  </ShoppingCartContext.Provider>
}

export default ShoppingCartProvider;