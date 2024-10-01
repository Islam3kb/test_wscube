import React from "react";

export default function Category({ finalCategory, setCatName }) {
  let cat = finalCategory.map((v, i) => {
    // console.log(v);
    return (
      <li
        onClick={() => setCatName(v.name)}
        key={i}
        className="bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2"
      >
        {v.name}
      </li>
    );
  });
  // console.log(cat);
  return (
    <div>
      <h3 className="text-[25px] font-[500] p-[10px]">Product Category</h3>
      <ul>{cat}</ul>
    </div>
  );
}
