import React from "react";

const Categories = () => {
  const allCategories: any = [];

  return (
    <div className="h-[600px] bg-black text-white w-[220px] rounded-10 p-10">
      <div className="font-bold text-[20px] mb-[30px]">Categories</div>
      <div>
        {allCategories.map((cat: string, i: number) => {
          return (
            <div key={i} className="text-[18px] cursor-pointer capitalize transition duration-300">
              {cat}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
