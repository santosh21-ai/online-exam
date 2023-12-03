// import React, { useEffect, useState } from "react";
const list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
const MarkQustions = () => {
  //   const [list, setList] = useState<string[]>([]);
  //   useEffect(() => {
  //     let rows: Array<string> = [];
  //     // const Questions = () => {
  //     for (let i = 0; i < 100; i++) {
  //       rows.push(i.toString());
  //       //   }
  //       //   return rows;
  //       setList(rows);
  //     }
  //   }, []);

  return (
    <div className=" mt-4 grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-7 xl:gap-x-0">
      {list.map((index, item) => (
        // <div className="font-bold text-gray-700 rounded-full bg-green-500 flex items-center justify-center font-mono h-10 w-10">
        //   404
        // </div>

        <div
          key={item}
          className={`font-bold text-gray-700 rounded-full  flex items-center justify-center font-mono h-8 w-8 ${
            item + 1 > 50 ? "bg-red-500" : "bg-green-500"
          }`}
          //   className="w-9 h-9 bg-green-500 rounded-full shadow item-center pl-2 pt-2"
        >
          <span className="text-white text-sm font-bold">{item + 1}</span>
        </div>
      ))}
      {/*  */}
    </div>
  );
};

export default MarkQustions;
