import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Other/ProductCard";
import { IProduct } from "@/types/interface";

const ProductWrapper = () => {
  const allProducts = useSelector((state: any) => state.products.products);

  return (
    <div className="ml-2 min-h-[600px] bg-gray-[200px] rounded-2 w-full p-2">
      <div>Products - All</div>
      <div className="flex flex-wrap justify-around">
        {allProducts?.map((product: IProduct) => {
          return (
            <Link href={`product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductWrapper;
