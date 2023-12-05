import React from "react";

const ProductWrapper = () => {
  return (
    <div className="ml-2 min-h-[600px] bg-gray-[200px] rounded-2 w-full p-2">
      <div>Products - All</div>
      <div className="flex flex-wrap justify-around">
        {/* {allProducts.map((product) => {
        return (
          <Link to={`product/${product.id}`} key={product.id}>
            <ProductCard product={product} />{" "}
          </Link>
        );
      })} */}
      </div>
    </div>
  );
};

export default ProductWrapper;
