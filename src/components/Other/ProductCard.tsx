import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: any) => {
  return (
    <div className="border border-black h-[280px] w-[160px] m-2">
      <div>
        <Image
          src={product?.image}
          alt="prod img"
          className="w-[120px] h-[120px]"
          width={500}
          height={500}
        />

        <div> {product?.title} </div>
        <div> {product?.price} USD </div>
        <div>
          Star : {product?.rating?.rate} ({product?.rating?.count}){" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
