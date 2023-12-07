import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SelectedProduct = () => {
  const singleProd = useSelector(
    (state: any) => state.products.selectedProduct
  );

  useEffect(() => {
    console.log(singleProd, "singleProd");
  }, [singleProd]);

  const addToCart = () => {
    // get cartItems from redux state

    // check is this prod already

    // if not exist

    // singleProd add

    // const prodObj = {
    //   productDetails: singleProd,
    //   count: 1,
    // };

    // if exist 

    // count should increase

    console.log(singleProd, "singleProd");
  };

  return (
    <div className="p-20 w-full">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
        onClick={() => addToCart()}
      >
        Add to cart
      </button>
    </div>
  );
};

export default SelectedProduct;
