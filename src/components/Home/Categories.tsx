import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const allCategories: any = useSelector(
    (state: any) => state.category.categories
  );

  return (
    <div className="h-[600px] bg-black text-white w-[220px] rounded-10 p-10">
      <div className="font-bold text-[20px] mb-[30px]">Categories</div>
      <div>
        {allCategories?.map((cat: string, i: number) => {
          return (
            <div
              key={i}
              className="text-[18px] cursor-pointer capitalize transition duration-300"
            >
              {cat}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
