import { increment, decrement } from "@/redux/counterSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const NewPage = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="border-2 border-solid border-black w-[200px] mx-auto mt-[10vh] p-2 text-center rounded">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(increment(null))}
      >
        +
      </button>
      <div className="p-2 font-bold"> {count} </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(decrement(null))}
      >
        -
      </button>
    </div>
  );
};

export default NewPage;
