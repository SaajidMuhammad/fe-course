import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Image
        src="https://www.zilliondesigns.com/blog/wp-content/uploads/Perfect-Ecommerce-Sales-Banner.jpg"
        alt=""
        className="w-[96%] h-[300px] mx-2 my-20 rounded-5 object-cover"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Banner;
